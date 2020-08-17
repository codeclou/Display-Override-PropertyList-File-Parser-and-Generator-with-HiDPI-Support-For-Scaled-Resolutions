import React, { Component } from 'react';
import alertify from 'alertify.js';
import PlistParser from './PlistParser';
import plistConstants from './PlistConstants';
import PlistForm from './PlistForm';
import XmlParser from './XmlParser';
import CharsetAndEncodingHelper from './CharsetAndEncodingHelper';
import plistContainerStyles from './PlistContainer.module.css';
import classNames from 'classnames';
import {
  IoIosCloudDownload,
  IoMdTrash,
  IoIosCloseCircle,
  IoIosCheckmarkCircle,
} from 'react-icons/io';

export default class PlistContainer extends Component {
  constructor(props) {
    super(props);
    this.handlePlistParserChange = this.handlePlistParserChange.bind(this);
    this.handlePlistFormChange = this.handlePlistFormChange.bind(this);
    this.downloadPlistAsFile = this.downloadPlistAsFile.bind(this);
    this.parser = new XmlParser();
    this.encHelp = new CharsetAndEncodingHelper();
    /* initial state */
    this.state = {
      plistXmlString: plistConstants.plistXmlString,
      plist: this.parser.parsePlistXml(plistConstants.plistXmlString),
      xmlParseError: false,
    };
    alertify.logPosition('top right');
  }

  handlePlistParserChange(newPlistXmlString) {
    let plistJson = {};
    try {
      plistJson = this.parser.parsePlistXml(newPlistXmlString);
      this.setState({
        plistXmlString: newPlistXmlString,
        plist: plistJson,
        xmlParseError: false,
      });
    } catch (err) {
      this.setState({
        plistXmlString: newPlistXmlString,
        xmlParseError: true,
      });
    }
  }

  handlePlistFormChange(newPlistJsonObject) {
    const xml = this.parser.generatePlistXml(newPlistJsonObject);
    this.setState({
      plistXmlString: xml,
      plist: newPlistJsonObject,
      xmlParseError: false,
    });
  }
  getPlistFilename() {
    return `DisplayProductID-${this.encHelp.intToHex(this.state.plist.displayProductId)}.plist`;
  }
  getFullPlistFilename() {
    const filePrefix = '/System/Library/Displays/Contents/Resources/Overrides/DisplayVendorID';
    return `${filePrefix}-${this.encHelp.intToHex(
      this.state.plist.displayVendorId,
    )}/DisplayProductID-${this.encHelp.intToHex(this.state.plist.displayProductId)}`;
  }
  downloadPlistAsFile() {
    const textFileAsBlob = new Blob([this.state.plistXmlString], { type: 'text/plain' });
    const fileNameToSaveAs = this.getPlistFilename();

    const downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';
    if (window.webkitURL != null) {
      /* CHROME */
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      /* FIREFOX */
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = (event) => document.body.removeChild(event.target);
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
    }
    downloadLink.click();
  }

  render() {
    const xmlNoticeClassNames = classNames({
      [`${plistContainerStyles.xmlValid}`]: !this.state.xmlParseError,
      [`${plistContainerStyles.xmlInvalid}`]: this.state.xmlParseError,
    });
    let xmlNoticeMessage;
    if (this.state.xmlParseError) {
      xmlNoticeMessage = (
        <span>
          <IoIosCloseCircle /> xml invalid
        </span>
      );
    } else {
      xmlNoticeMessage = (
        <span>
          <IoIosCheckmarkCircle /> xml valid
        </span>
      );
    }
    return (
      <div className="row">
        <div className={classNames('col-sm-12', 'col-md-12', 'col-lg-12', 'col-xl-4')}>
          <PlistForm plist={this.state.plist} handleChange={this.handlePlistFormChange} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
          <div>
            <div className="row">
              <div className="col-12">
                <p className={classNames(plistContainerStyles.resolutionSettingsHeading)}>
                  Display PropertyList Filename
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <span className={classNames(plistContainerStyles.filename)}>
                  {this.getFullPlistFilename()}
                </span>
              </div>
            </div>
          </div>
          <div className={xmlNoticeClassNames}>{xmlNoticeMessage}</div>
          <PlistParser
            plistXmlString={this.state.plistXmlString}
            updatePlistXmlString={this.handlePlistParserChange}
          />

          <div className={classNames('row', plistContainerStyles.buttonBarFooter)}>
            <div className="col-md-12 text-right">
              <a className={plistContainerStyles.resetButton} href="./">
                <IoMdTrash /> Reset Plist
              </a>
              <a
                className={plistContainerStyles.downloadButton}
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  this.downloadPlistAsFile();
                }}
              >
                <IoIosCloudDownload />
                &nbsp;
                {'DisplayProductID-' + this.encHelp.intToHex(this.state.plist.displayProductId)}
              </a>
              <span className={plistContainerStyles.downloadNote}>
                <br />
                (only Chrome and Firefox)
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
