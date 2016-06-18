import XmlParserError from './XmlParserError';
import plistConstants from './PlistConstants';
import CharsetAndEncodingHelper from './CharsetAndEncodingHelper';

export default class XmlParser {

  constructor() {
    this.encHelp = new CharsetAndEncodingHelper();
    if (typeof window.DOMParser !== 'undefined') {
      this.parseXmlIntern = (xmlStr) => (new window.DOMParser()).parseFromString(xmlStr, 'text/xml');
    } else if (typeof window.ActiveXObject !== 'undefined' && new window.ActiveXObject('Microsoft.XMLDOM')) {
      this.parseXmlIntern = (xmlStr) => {
        const xmlDoc = new window.ActiveXObject('Microsoft.XMLDOM');
        xmlDoc.async = 'false';
        xmlDoc.loadXML(xmlStr);
        return xmlDoc;
      };
    } else {
      throw new XmlParserError('No XML parser found');
    }
  }

  parseXml(xmlString) {
    return this.parseXmlIntern(xmlString);
  }

  generateBase64String(decimalScaleResolutionObject) {
    const hexString = [];
    hexString.push(this.encHelp.intToHexPrefixedWithZerosTo8Bit(decimalScaleResolutionObject.width));
    hexString.push(this.encHelp.intToHexPrefixedWithZerosTo8Bit(decimalScaleResolutionObject.height));
    if (decimalScaleResolutionObject.hidpi === true) {
      hexString.push(this.encHelp.intToHexPrefixedWithZerosTo8Bit(1));
      hexString.push(this.encHelp.intToHexPrefixedWithZerosTo8Bit(2097152));
    }
    const joinedHexString = hexString.join('');
    return this.encHelp.hexToBase64(joinedHexString);
  }

  generateDecodedScaleResolutionObject(decimalScaleResolutionObject, base64String) {
    const decodedObject = {};
    if (decimalScaleResolutionObject.hidpi === true) {
      decodedObject.decimalStringSpaced = `${decimalScaleResolutionObject.width} ${decimalScaleResolutionObject.height} ${decimalScaleResolutionObject.hidpi}`;
    } else {
      decodedObject.decimalStringSpaced = `${decimalScaleResolutionObject.width} ${decimalScaleResolutionObject.height}`;
    }
    decodedObject.hexStringSpaced = this.encHelp.base64ToHexStringSpaced(base64String);
    return decodedObject;
  }

  generateDecimalScaleResolutionObject(base64String) {
    const decimalStringSpaced = this.encHelp.base64ToDecimalStringSpaced(base64String);
    const decimalItems = decimalStringSpaced.split(' ');
    const resolution = {
      width: decimalItems[0],
      height: decimalItems[1],
      hidpi: false,
    };
    if (decimalItems.length > 2) {
      if (Number(decimalItems[2]) === 1) {
        resolution.hidpi = true;
      }
    }
    return resolution;
  }

  /**
   * reverse version of parsePlistXml
   * @param plistObject
     */
  generatePlistXml(plistObject) {
    const xml = [];
    xml.push(plistConstants.plistXmlHeader);
    xml.push('<dict>');
    xml.push('  <key>DisplayProductName</key>');
    xml.push(`  <string>${plistObject.displayProductName}</string>`);
    xml.push('  <key>DisplayProductID</key>');
    xml.push(`  <integer>${plistObject.displayProductId}</integer>`);
    xml.push('  <key>DisplayVendorID</key>');
    xml.push(`  <integer>${plistObject.displayVendorId}</integer>`);
    xml.push('  <key>scale-resolutions</key>');
    xml.push('  <array>');
    plistObject.scaleResolutions.forEach((scaleResolution) => {
      xml.push(`    <data>${scaleResolution.base64String}</data>`);
    });
    xml.push('  </array>');
    xml.push('</dict>');
    xml.push(plistConstants.plistXmlFooter);
    return xml.join('\n');
  }

  parsePlistXml(xmlString) {
    let xml = {};
    try {
      xml = this.parseXml(xmlString);
    } catch (err) {
      throw new XmlParserError('invalid xml 001');
    }

    if (xml.getElementsByTagName('parsererror').length > 0) {
      /* xml.getElementsByTagName("parsererror")[0] */
      throw new XmlParserError('invalid xml 002');
    }

    const plistJson = {
      displayProductName: '',
      displayProductId: '',
      displayVendorId: '',
      scaleResolutions: [],
    };

    try {
      const children = xml.documentElement.childNodes;
      for (let i = 0; i < children.length; i++) {
        if (children[i].nodeName === 'dict') {
          const dictChildren = children[i].childNodes;
          for (let j = 0; j < dictChildren.length; j++) {
            /* nextSibling */
            const dictChildNodeName = dictChildren[j].nodeName;
            let dictChildNodeValue = '';
            if (dictChildren[j].childNodes[0] !== undefined) {
              dictChildNodeValue = dictChildren[j].childNodes[0].nodeValue;
            }
            if (dictChildNodeName === 'key' && dictChildNodeValue === 'DisplayProductName') {
              plistJson.displayProductName = dictChildren[j + 2].childNodes[0].nodeValue;
            }
            if (dictChildNodeName === 'key' && dictChildNodeValue === 'DisplayProductID') {
              plistJson.displayProductId = dictChildren[j + 2].childNodes[0].nodeValue;
            }
            if (dictChildNodeName === 'key' && dictChildNodeValue === 'DisplayVendorID') {
              plistJson.displayVendorId = dictChildren[j + 2].childNodes[0].nodeValue;
            }
            if (dictChildNodeName === 'key' && dictChildNodeValue === 'scale-resolutions') {
              const scaleResolutionsChildren = dictChildren[j + 2].childNodes;
              for (let l = 0; l < scaleResolutionsChildren.length; l++) {
                if (scaleResolutionsChildren[l].nodeName === 'data') {
                  const scaleResolution = {};
                  scaleResolution.base64String = scaleResolutionsChildren[l].childNodes[0].nodeValue;
                  scaleResolution.decimal = this.generateDecimalScaleResolutionObject(scaleResolution.base64String);
                  scaleResolution.decoded = this.generateDecodedScaleResolutionObject(scaleResolution.decimal, scaleResolution.base64String);
                  plistJson.scaleResolutions.push(scaleResolution);
                }
              }
            }
          }
        }
      }
    } catch (err) {
      throw new XmlParserError('invalid xml 003');
    }
    return plistJson;
  }
}
