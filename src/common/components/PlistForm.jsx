import React from 'react';
import PropTypes from 'prop-types';
import CharsetAndEncodingHelper from './CharsetAndEncodingHelper';
import XmlParser from './XmlParser';
import plistConstants from './PlistConstants';
import plistStyles from './PlistForm.module.css';
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
        <div
          key={scaleResolutionIndex}
          className={classNames(plistStyles.resolutionListItem)}
        >
          <div className="row">
            <div className="col-2">
              <input
                type="checkbox"
                name="decimal_hidpi"
                onChange={this.handleResolutionInputChange}
                data-index={scaleResolutionIndex}
                checked={scaleResolution.decimal.hidpi}
              />
            </div>
            <div className="col-7">
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
            </div>
            <div className="col-3 d-flex flex-row-reverse text-right">
              <div>
                <a
                className={classNames(plistStyles.resolutionButton, plistStyles.resolutionButtonRemove)}
                onClick={() => (this.deleteResolution(scaleResolutionIndex))}
                >
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
              <code className={plistStyles.hexCode}>&lt;{scaleResolution.decoded.hexStringSpaced}&gt;</code>
            </div>
          </div>
        </div>
      );
    });


    const scaleResolutionWrapper = (
      <div>
        <div className={classNames(plistStyles.resolutionList)}>
          <div className="row">
            <div className={classNames(plistStyles.resolutionListHeading, "col-2")}>HiDPI</div>
            <div className={classNames(plistStyles.resolutionListHeading, "col-7")}>Resolution</div>
            <div className={classNames(plistStyles.resolutionListHeading, "col-3", "text-right")}>Remove</div>
          </div>
          {scaleResolutions}
          <div className="row">
            <div className="col-2"></div>
            <div className={classNames(plistStyles.resolutionListItem, "col-8")}>
              <a onClick={() => (this.addResolution())} className={plistStyles.resolutionButtonAdd}><i className="fa fa-plus" aria-hidden="true"></i> Add new</a>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>);



    return (
      <div className={classNames(plistStyles.resolutionBox)}>
        <div className="row">
          <div className="col-12">
          <p className={classNames(plistStyles.resolutionSettingsHeading)}>DisplayProductName</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input
              className={classNames(plistStyles.field)}
              type="text"
              name="displayProductName"
              value={this.state.displayProductName}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className={classNames(plistStyles.resolutionSettingsHeading)}>DisplayProductID</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={classNames(plistStyles.hexColumn)}>
              (0x<input
                className={classNames(plistStyles.hexField)}
                style={{ width: `${this.state.displayProductIdHex.length * 11}px` }}
                type="text"
                name="displayProductIdHex"
                value={this.state.displayProductIdHex}
                onChange={this.handleInputChange}
              />)<sub>16</sub> = ({this.state.displayProductId})<sub>10</sub>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className={classNames(plistStyles.resolutionSettingsHeading)}>DisplayVendorID</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={classNames(plistStyles.hexColumn)}>
              (0x<input
                className={classNames(plistStyles.hexField)}
                style={{ width: `${this.state.displayVendorIdHex.length * 11}px` }}
                type="text"
                name="displayVendorIdHex"
                value={this.state.displayVendorIdHex}
                onChange={this.handleInputChange}
              />)<sub>16</sub> = ({this.state.displayVendorId})<sub>10</sub>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className={classNames(plistStyles.resolutionSettingsHeading)}>Scale Resolutions</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={classNames(plistStyles.resolutionListTd)}>
              {scaleResolutionWrapper}
            </div>
          </div>
        </div>


      </div>
    );
  }
}
PlistForm.propTypes = {
  plist: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default PlistForm;
