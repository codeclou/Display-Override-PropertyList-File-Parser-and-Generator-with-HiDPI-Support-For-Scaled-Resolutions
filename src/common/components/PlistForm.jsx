import React, { PropTypes } from 'react';
import CharsetAndEncodingHelper from './CharsetAndEncodingHelper';
import XmlParser from './XmlParser';
import plistConstants from './PlistConstants';
import plistStyles from './PlistForm.css';
import classNames from 'classnames';
import alertify from 'alertify.js';
alertify.logPosition('top right');

const encHelp = new CharsetAndEncodingHelper();
const updateState = (props) => ({
  displayProductName: props.plist.displayProductName,
  displayProductId: props.plist.displayProductId,
  displayProductIdHex: encHelp.intToHex(props.plist.displayProductId),
  displayVendorId: props.plist.displayVendorId,
  displayVendorIdHex: encHelp.intToHex(props.plist.displayVendorId),
  scaleResolutions: props.plist.scaleResolutions,
});

class PlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.encHelp = new CharsetAndEncodingHelper();
    this.xmlParser = new XmlParser();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteResolution = this.deleteResolution.bind(this);
    this.handleResolutionInputChange = this.handleResolutionInputChange.bind(this);
    this.addResolution = this.addResolution.bind(this);
    this.state = updateState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(updateState(nextProps));
  }

  isValidHexString(hexStringToCheck) {
    if (hexStringToCheck.match(/^[a-f0-9]+$/)) {
      return true;
    }
    alertify.error('Please enter only HEX values [a-f0-9]+');
    return false;
  }

  isValidDecimalString(decimalStringToCheck) {
    if (decimalStringToCheck.match(/^[0-9]+$/)) {
      return true;
    }
    alertify.error('Please enter only digits [0-9]+');
    return false;
  }

  handleResolutionInputChange(event) {
    const index = event.target.getAttribute('data-index');
    const newState = Array.from(this.state.scaleResolutions);
    const scaleResolution = this.encHelp.deepCopyOrReturnEmptyObject(newState[index]);
    if (event.target.name === 'decimal_width') {
      if (!this.isValidDecimalString(event.target.value)) {
        return;
      }
      scaleResolution.decimal.width = event.target.value;
    }
    if (event.target.name === 'decimal_height') {
      if (!this.isValidDecimalString(event.target.value)) {
        return;
      }
      scaleResolution.decimal.height = event.target.value;
    }
    if (event.target.name === 'decimal_hidpi') {
      scaleResolution.decimal.hidpi = event.target.checked;
    }
    try {
      const base64String = this.xmlParser.generateBase64String(scaleResolution.decimal);
      newState[index] = {
        base64String,
        decoded: this.xmlParser.generateDecodedScaleResolutionObject(scaleResolution.decimal, base64String),
        decimal: this.encHelp.deepCopyOrReturnEmptyObject(scaleResolution.decimal),
      };
      this.setState({ scaleResolutions: newState });
      setTimeout(() => (this.props.handleChange(this.state)), 300);
    } catch (err) {
      alertify.error(`Invalid Input. ${err}`);
    }
  }

  handleInputChange(event) {
    if (event.target.name === 'displayProductIdHex') {
      if (this.isValidHexString(event.target.value)) {
        this.setState({ displayProductId: this.encHelp.hexToInt(event.target.value) });
      } else {
        return;
      }
    }
    if (event.target.name === 'displayVendorIdHex') {
      if (this.isValidHexString(event.target.value)) {
        this.setState({ displayVendorId: this.encHelp.hexToInt(event.target.value) });
      } else {
        return;
      }
    }
    this.setState({ [`${event.target.name}`]: event.target.value });
    setTimeout(() => (this.props.handleChange(this.state)), 300);
  }

  addResolution() {
    const newState = Array.from(this.state.scaleResolutions);
    /* deep clone default object without any shared references! */
    newState.push(this.encHelp.deepCopyOrReturnEmptyObject(plistConstants.defaultResolutionForAddNew));
    this.setState({
      scaleResolutions: newState,
    });
    setTimeout(() => (this.props.handleChange(this.state)), 300);
  }

  deleteResolution(index) {
    this.setState({
      scaleResolutions: this.state.scaleResolutions.filter((_, i) => i !== index),
    });
    setTimeout(() => (this.props.handleChange(this.state)), 300);
  }

  render() {
    let scaleResolutions = [];
    this.state.scaleResolutions.forEach((scaleResolution, scaleResolutionIndex) => {
      scaleResolutions.push(
        <li
          key={scaleResolutionIndex}
          className={classNames(plistStyles.resolutionListItem)}
        >
          <input
            className={classNames(plistStyles.resolutionField)}
            type="text"
            name="decimal_width"
            value={scaleResolution.decimal.width}
            onChange={this.handleResolutionInputChange}
            data-index={scaleResolutionIndex}
          />
          &nbsp;
          x
          &nbsp;
          <input
            className={classNames(plistStyles.resolutionField)}
            type="text"
            name="decimal_height"
            value={scaleResolution.decimal.height}
            onChange={this.handleResolutionInputChange}
            data-index={scaleResolutionIndex}
          />
          &nbsp;
          hidpi
          &nbsp;
          <input
            type="checkbox"
            name="decimal_hidpi"
            onChange={this.handleResolutionInputChange}
            data-index={scaleResolutionIndex}
            checked={scaleResolution.decimal.hidpi}
          />
          <a
            className={classNames(plistStyles.resolutionButton, plistStyles.resolutionButtonRemove)}
            onClick={() => (this.deleteResolution(scaleResolutionIndex))}
          >
            <i className="fa fa-minus-square" aria-hidden="true"></i> remove
          </a>
          <br />
          <code className={plistStyles.hexCode}>&lt;{scaleResolution.decoded.hexStringSpaced}&gt;</code>
        </li>
      );
    });
    const scaleResolutionWrapper = (
      <div>
        <ul className={classNames(plistStyles.resolutionList)}>
          <li className={classNames(plistStyles.resolutionListItem)}>
            <a onClick={() => (this.addResolution())} className={plistStyles.resolutionButton}><i className="fa fa-plus-square" aria-hidden="true"></i> add new</a>
          </li>
          {scaleResolutions}
        </ul>
      </div>);
    const filePrefix = '/System/Library/Displays/Contents/Resources/Overrides/DisplayVendorID';
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="2">
                <p><strong>Display PropertyList Filename</strong></p>
                <span className={plistStyles.filename}>{filePrefix}-{this.state.displayVendorIdHex}/DisplayProductID-{this.state.displayProductIdHex}</span>
              </td>
            </tr>
            <tr>
              <th scope="row" style={{ width: '250px' }}>DisplayProductName</th>
              <td>
                <input
                  className={classNames(plistStyles.field)}
                  type="text"
                  name="displayProductName"
                  value={this.state.displayProductName}
                  onChange={this.handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">DisplayProductID</th>
              <td className={classNames(plistStyles.hexColumn)}>
                (0x<input
                  className={classNames(plistStyles.hexField)}
                  style={{ width: `${this.state.displayProductIdHex.length * 11}px` }}
                  type="text"
                  name="displayProductIdHex"
                  value={this.state.displayProductIdHex}
                  onChange={this.handleInputChange}
                />)<sub>16</sub> = ({this.state.displayProductId})<sub>10</sub>

              </td>
            </tr>
            <tr>
              <th scope="row">DisplayVendorID</th>
              <td className={classNames(plistStyles.hexColumn)}>
                (0x<input
                  className={classNames(plistStyles.hexField)}
                  style={{ width: `${this.state.displayVendorIdHex.length * 11}px` }}
                  type="text"
                  name="displayVendorIdHex"
                  value={this.state.displayVendorIdHex}
                  onChange={this.handleInputChange}
                />)<sub>16</sub> = ({this.state.displayVendorId})<sub>10</sub>
              </td>
            </tr>
            <tr>
              <th>Scale Resolutions</th>
              <td className={classNames(plistStyles.resolutionListTd)}>
                {scaleResolutionWrapper}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
PlistForm.propTypes = {
  plist: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default PlistForm;
