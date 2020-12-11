import React, { Component } from 'react';
import alertify from 'alertify.js';
import PlistParser from './PlistParser';
import plistConstants from './PlistConstants';
import PlistForm from './PlistForm';
import XmlParser from './XmlParser';
import CharsetAndEncodingHelper from './CharsetAndEncodingHelper';
import plistContainerStyles from './PlistContainer.module.css';
import classNames from 'classnames';
import appStyles from './App.module.css';
import {
  IoIosCloudDownload,
  IoMdTrash,
  IoIosCloseCircle,
  IoIosCheckmarkCircle,
  IoIosWarning,
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
      <>
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
        <div className="row">
          <div className="my-5">&nbsp;</div>
          <hr />
          <div className={classNames('row', appStyles.howTo)}>
            <div className="col-md-2" />
            <div className="col-md-8">
              <h3 className={'howtoHeaderH3'}>How to use Scale Resolutions</h3>
              <div>
                <p>
                  Follow the steps below to learn how to use Scale Resolutions. See the awesome{' '}
                  <a href="http://www.tonymacx86.com/threads/adding-using-hidpi-custom-resolutions.133254/">
                    tonymacx86.com forum
                  </a>{' '}
                  for more details.
                </p>
                <div className={appStyles.warning}>
                  <div className={appStyles.warningIcon}>
                    <IoIosWarning style={{ marginRight: '10px' }} size="30" />
                  </div>
                  <div>
                    <p>
                      <strong>This tool is provided without warranty</strong>. codeclou is not
                      responsible for damages to your system. It is heavily discouraged to edit
                      files in <em>/System/</em> directory. You are doing it at your own risk.
                    </p>
                  </div>
                </div>
              </div>
              <h5
                className={classNames(
                  appStyles.numberedList,
                  appStyles.numberedListFirst,
                  appStyles.howtoHeaderH5,
                )}
              >
                Enable HiDPI Mode
              </h5>
              <p>Open your terminal and copy/paste the following command to enable HiDPI mode:</p>
              <div className={appStyles.codeBox}>
                sudo defaults write /Library/Preferences/com.apple.windowserver.plist
                DisplayResolutionEnabled -bool true
              </div>
              <h5
                className={classNames(
                  appStyles.numberedList,
                  appStyles.numberedListSecond,
                  appStyles.howtoHeaderH5,
                )}
              >
                Detect your Display
              </h5>
              <p>To detect your display copy/paste the following command into your terminal:</p>
              <div className={appStyles.codeBox}>ioreg -lw0 | grep IODisplayPrefsKey</div>
              <p>The output on a Mac should look like so:</p>
              <div className={appStyles.codeBox}>
                "IODisplayPrefsKey" =
                "IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/IGPU@2/AppleIntelFramebuffer@0/display0/AppleBacklightDisplay-610-a019"
                <br />
                "IODisplayPrefsKey" =
                "IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/IGPU@2/AppleIntelFramebuffer@2/display0/AppleDisplay-10ac-d06e"
              </div>
              <p>
                All external monitors are identified by <em>AppleDisplay</em> and internal monitors
                by <em>AppleBacklightDisplay</em>. So if you want to set scale resolutions for your
                external monitor you will need to look at the second line. Identify at the end of
                the line your <strong>DisplayVendorId</strong> as{' '}
                <code>{this.encHelp.intToHex(this.state.plist.displayVendorId)}</code> and your{' '}
                <strong>DisplayProductID</strong> as{' '}
                <code>{this.encHelp.intToHex(this.state.plist.displayProductId)}</code> and note
                these values. Now insert them into the corresponding input fields on the top left
                and the generator will generate a basic plist file for you.
              </p>
              <h5
                className={classNames(
                  appStyles.numberedList,
                  appStyles.numberedListThird,
                  appStyles.howtoHeaderH5,
                )}
              >
                Customize your Resolutions
              </h5>
              <p>
                Now you can customize the <strong>Scale Resolutions</strong>. For example you could
                enter <strong>2560x1440</strong> and enable <strong>HiDPI</strong>. Be aware that
                the generator does not do any sanity checks for you, what you enter is just getting
                encoded. Please be aware that depending on your monitor and internal mac-checkups
                during startup some resolutions might not work. <br />
              </p>
              <h5
                className={classNames(
                  appStyles.numberedList,
                  appStyles.numberedListFourth,
                  appStyles.howtoHeaderH5,
                )}
              >
                Download plist and copy to System folder
              </h5>
              <p>
                Once you have configured all your resolutions click the download button. A file
                called <code>DisplayProductID-*.plist</code> will download.
              </p>
              <p>
                Now copy this file to the destination that has been calculated on the top right
                under <strong>Display PropertyList Filename</strong>. Example for a DELL Monitor:
              </p>
              <div className={appStyles.codeBox}>
                {`sudo cp ~/Downloads/DisplayProductID-${this.encHelp.intToHex(
                  this.state.plist.displayProductId,
                )}.plist `}
                {`/System/Library/Displays/Contents/Resources/Overrides/DisplayVendorID-${this.encHelp.intToHex(
                  this.state.plist.displayVendorId,
                )}/DisplayProductID-${this.encHelp.intToHex(this.state.plist.displayProductId)}`}
              </div>
              <p>
                <strong>NOTE:</strong> That you might need to{' '}
                <a href="http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/">
                  disable System Integrity Protection
                </a>{' '}
                (at your own risk) to copy files to <code>/System/</code>. If you are running macOS
                Catalina or above, see the note below.
              </p>
              <p>
                <strong>NOTE:</strong> On macOS Catalina systems (or{' '}
                <a href="https://developer.apple.com/forums/thread/649832">above</a>), the{' '}
                <code>/System/</code> folder is mounted read-only, so instead you should copy the
                file to{' '}
                <code>
                  {`/Library/Displays/Contents/Resources/Overrides/DisplayVendorID-${this.encHelp.intToHex(
                    this.state.plist.displayVendorId,
                  )}/DisplayProductID-${this.encHelp.intToHex(this.state.plist.displayProductId)}`}
                </code>
                . This can be done without disabling System Integrity Protection. If the file path 
                does not exist, create it with{' '}
                <code>
                  {`sudo mkdir -p /Library/Displays/Contents/Resources/Overrides/DisplayVendorID-${this.encHelp.intToHex(
                    this.state.plist.displayVendorId,
                  )}`}
                </code>
              </p>
              <h5
                className={classNames(
                  appStyles.numberedList,
                  appStyles.numberedListFifth,
                  appStyles.howtoHeaderH5,
                )}
              >
                Restart Mac and use Resolutions
              </h5>
              <p>
                Now you can change your resolution to the ones you entered (if macOS did not disable
                them during boot check-ups)
              </p>
              <p>
                A very handy{' '}
                <a href="https://github.com/avibrazil/RDM">tool to enable resolutions is RDM</a>
                .
                <br />
                If you are more into commandline tools you might like{' '}
                <a href="https://github.com/jhford/screenresolution">screenresolutions</a>
                .
                <br />
                And if you are willing to pay a small amount{' '}
                <a href="http://www.madrau.com/">SwitchResX</a> is also a great tool.
              </p>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </>
    );
  }
}
