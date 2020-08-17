import React from 'react';
import PropTypes from 'prop-types';
import CharsetAndEncodingHelper from './CharsetAndEncodingHelper';
import XmlParser from './XmlParser';
import plistConstants from './PlistConstants';
import plistStyles from './PlistForm.module.css';
import classNames from 'classnames';
import { IoMdTrash, IoMdAddCircle } from 'react-icons/io';
import alertify from 'alertify.js';
alertify.logPosition('top right');

const encHelp = new CharsetAndEncodingHelper();
const xmlParser = new XmlParser();

const PlistForm = (props) => {
  const isValidHexString = (hexStringToCheck) => {
    if (hexStringToCheck.match(/^[a-f0-9]+$/)) {
      return true;
    }
    alertify.error('Please enter only HEX values [a-f0-9]+');
    return false;
  };

  const isValidDecimalString = (decimalStringToCheck) => {
    if (decimalStringToCheck.match(/^[0-9]+$/)) {
      return true;
    }
    alertify.error('Please enter only digits [0-9]+');
    return false;
  };

  const handleResolutionInputChange = (event) => {
    const index = event.target.getAttribute('data-index');
    const newState = Array.from(props.plist.scaleResolutions);
    const scaleResolution = encHelp.deepCopyOrReturnEmptyObject(newState[index]);
    if (event.target.name === 'decimal_width') {
      if (!isValidDecimalString(event.target.value)) {
        return;
      }
      scaleResolution.decimal.width = event.target.value;
    }
    if (event.target.name === 'decimal_height') {
      if (!isValidDecimalString(event.target.value)) {
        return;
      }
      scaleResolution.decimal.height = event.target.value;
    }
    if (event.target.name === 'decimal_hidpi') {
      scaleResolution.decimal.hidpi = event.target.checked;
    }
    try {
      const base64String = xmlParser.generateBase64String(scaleResolution.decimal);
      newState[index] = {
        base64String,
        decoded: xmlParser.generateDecodedScaleResolutionObject(
          scaleResolution.decimal,
          base64String,
        ),
        decimal: encHelp.deepCopyOrReturnEmptyObject(scaleResolution.decimal),
      };
      props.handleChange({
        ...props.plist,
        ...{ scaleResolutions: newState },
      });
    } catch (err) {
      alertify.error(`Invalid Input. ${err}`);
    }
  };

  const handleInputChange = (event) => {
    if (event.target.name === 'displayProductName') {
      props.handleChange({
        ...props.plist,
        ...{ displayProductName: event.target.value },
      });
    }
    if (event.target.name === 'displayProductIdHex') {
      if (isValidHexString(event.target.value)) {
        props.handleChange({
          ...props.plist,
          ...{ displayProductId: encHelp.hexToInt(event.target.value) },
        });
      }
    }
    if (event.target.name === 'displayVendorIdHex') {
      if (isValidHexString(event.target.value)) {
        props.handleChange({
          ...props.plist,
          ...{ displayVendorId: encHelp.hexToInt(event.target.value) },
        });
      }
    }
  };

  const addResolution = () => {
    const newState = Array.from(props.plist.scaleResolutions);
    /* deep clone default object without any shared references! */
    newState.push(encHelp.deepCopyOrReturnEmptyObject(plistConstants.defaultResolutionForAddNew));
    props.handleChange({
      ...props.plist,
      ...{ scaleResolutions: newState },
    });
  };

  const deleteResolution = (index) => {
    props.handleChange({
      ...props.plist,
      ...{ scaleResolutions: props.plist.scaleResolutions.filter((_, i) => i !== index) },
    });
  };

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
            value={props.plist.displayProductName}
            onChange={handleInputChange}
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
            (0x
            <input
              className={classNames(plistStyles.hexField)}
              style={{
                width: `${encHelp.intToHex(props.plist.displayProductId).length * 11}px`,
              }}
              type="text"
              name="displayProductIdHex"
              value={encHelp.intToHex(props.plist.displayProductId)}
              onChange={handleInputChange}
            />
            )<sub>16</sub> = ({props.plist.displayProductId})<sub>10</sub>
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
            (0x
            <input
              className={classNames(plistStyles.hexField)}
              style={{
                width: `${encHelp.intToHex(props.plist.displayVendorId).length * 11}px`,
              }}
              type="text"
              name="displayVendorIdHex"
              value={encHelp.intToHex(props.plist.displayVendorId)}
              onChange={handleInputChange}
            />
            )<sub>16</sub> = ({props.plist.displayVendorId})<sub>10</sub>
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
            <div>
              <div className={classNames(plistStyles.resolutionList)}>
                <div className="row">
                  <div className={classNames(plistStyles.resolutionListHeading, 'col-2')}>
                    HiDPI
                  </div>
                  <div className={classNames(plistStyles.resolutionListHeading, 'col-7')}>
                    Resolution
                  </div>
                  <div
                    className={classNames(plistStyles.resolutionListHeading, 'col-3', 'text-right')}
                  >
                    Remove
                  </div>
                </div>
                {props.plist.scaleResolutions.map((scaleResolution, scaleResolutionIndex) => (
                  <div
                    key={scaleResolutionIndex}
                    className={classNames(plistStyles.resolutionListItem)}
                  >
                    <div className="row">
                      <div className="col-2">
                        <input
                          type="checkbox"
                          name="decimal_hidpi"
                          onChange={handleResolutionInputChange}
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
                          onChange={handleResolutionInputChange}
                          data-index={scaleResolutionIndex}
                        />
                        &nbsp; x &nbsp;
                        <input
                          className={classNames(plistStyles.resolutionField)}
                          type="text"
                          name="decimal_height"
                          value={scaleResolution.decimal.height}
                          onChange={handleResolutionInputChange}
                          data-index={scaleResolutionIndex}
                        />
                      </div>
                      <div className="col-3 d-flex flex-row-reverse text-right">
                        <div>
                          <a
                            href="#delete"
                            className={classNames(
                              plistStyles.resolutionButton,
                              plistStyles.resolutionButtonRemove,
                            )}
                            onClick={(e) => {
                              e.preventDefault();
                              deleteResolution(scaleResolutionIndex);
                            }}
                          >
                            <IoMdTrash />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-10">
                        <code className={plistStyles.hexCode}>
                          &lt;{scaleResolution.decoded.hexStringSpaced}&gt;
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="row">
                  <div className="col-2"></div>
                  <div className={classNames(plistStyles.resolutionListItem, 'col-8')}>
                    <a
                      href="#add"
                      onClick={(e) => {
                        e.preventDefault();
                        addResolution();
                      }}
                      className={plistStyles.resolutionButtonAdd}
                    >
                      <IoMdAddCircle /> Add new
                    </a>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlistForm.propTypes = {
  plist: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default PlistForm;
