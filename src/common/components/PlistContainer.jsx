import React, { Component } from 'react';
import alertify from 'alertify.js';
import PlistParser from './PlistParser';
import plistConstants from './PlistConstants';
import PlistForm from './PlistForm';
import XmlParser from './XmlParser';
import CharsetAndEncodingHelper from './CharsetAndEncodingHelper';
import plistContainerStyles from './PlistContainer.css';
import classNames from 'classnames';

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

  downloadPlistAsFile() {
    const textFileAsBlob = new Blob([this.state.plistXmlString], { type: 'text/plain' });
    const fileNameToSaveAs = `DisplayProductID-${this.encHelp.intToHex(this.state.plist.displayProductId)}.plist`;

    const downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';
    if (window.webkitURL != null) {
      /* CHROME */
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      /* FIREFOX */
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = (event) => (document.body.removeChild(event.target));
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
      xmlNoticeMessage = <span><i className="fa fa-exclamation-triangle fa-fw" aria-hidden="true"></i> xml invalid</span>;
    } else {
      xmlNoticeMessage = <span><i className="fa fa-check-square fa-fw" aria-hidden="true"></i> xml valid</span>;
    }
    return (
      <div className="row">
        <div className="col-md-6">
          <div className={xmlNoticeClassNames}>
            {xmlNoticeMessage}
          </div>
          <PlistParser
            plistXmlString={this.state.plistXmlString}
            handleChangeFromParent={this.handlePlistParserChange}
          />

          <div className={classNames('row', plistContainerStyles.buttonBarFooter)}>
            <div className="col-md-4">
              <a
                className={plistContainerStyles.resetButton}
                href="./"
              >
                <i className="fa fa-times" aria-hidden="true"></i>&nbsp;
                Reset Plist
              </a>
            </div>
            <div className="col-md-8 text-xs-right">
              <span className={plistContainerStyles.downloadNote}>
                (only Chrome and Firefox)&nbsp;
              </span>

              <a
                className={plistContainerStyles.downloadButton}
                onClick={() => this.downloadPlistAsFile()}
              >
                <i className="fa fa-download" aria-hidden="true"></i>&nbsp;
                DisplayProductID-{this.encHelp.intToHex(this.state.plist.displayProductId)}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <PlistForm
            plist={this.state.plist}
            handleChange={this.handlePlistFormChange}
          />
        </div>
      </div>
    );
  }
}
