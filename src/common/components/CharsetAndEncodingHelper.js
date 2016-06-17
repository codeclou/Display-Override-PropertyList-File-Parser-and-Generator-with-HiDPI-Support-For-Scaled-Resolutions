export default class CharsetAndEncodingHelper {

  deepCopyOrReturnEmptyObject(object) {
    if (object === undefined || object === null) {
      return {};
    }
    try {
      return JSON.parse(JSON.stringify(object));
    } catch (err) {
      return {};
    }
  }

  intToHex(intNumber) {
    if (intNumber !== undefined && intNumber !== null) {
      return Number(intNumber).toString(16);
    }
    return '';
  }

  intToHexPrefixedWithZerosTo8Bit(intNumber) {
    const hexString = this.intToHex(intNumber);
    const len = 8 - hexString.length;
    let hexWithZeroPrefixed = '';
    for (let i = 0; i < len; i++) {
      hexWithZeroPrefixed = `0${hexWithZeroPrefixed}`;
    }
    return `${hexWithZeroPrefixed}${hexString}`;
  }

  hexToInt(hexString) {
    return parseInt(hexString, 16);
  }

  base64ToHexStringSpaced(base64String) {
    if (base64String === undefined || base64String === null || base64String === '') {
      return '';
    }
    return new Buffer(base64String, 'base64').toString('hex').replace(/(.{8})/g, '$1 ')
      .trim();
  }

  base64ToDecimalStringSpaced(base64String) {
    if (base64String === undefined || base64String === null || base64String === '') {
      return '';
    }
    const hexString = new Buffer(base64String, 'base64').toString('hex').replace(/(.{8})/g, '$1 ')
      .trim();
    const splitted = hexString.split(' ');
    let ret = '';
    for (let i = 0; i < splitted.length; i++) {
      ret = `${ret}${this.hexToInt(splitted[i])} `;
    }
    return ret.trim();
  }

  hexToBase64(hexStringToEncode) {
    if (hexStringToEncode === undefined || hexStringToEncode === null || hexStringToEncode === '') {
      return '';
    }
    return new Buffer(hexStringToEncode, 'hex').toString('base64');
  }

}
