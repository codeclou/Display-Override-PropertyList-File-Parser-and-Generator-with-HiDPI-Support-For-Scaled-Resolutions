import React, { Component } from 'react';
import PlistContainer from './PlistContainer';
import AspectRatioCalculator from './AspectRatioCalculator';
import appStyles from './App.module.css';
import classNames from 'classnames';
import logo from './img/logo-scaled-resolutions.svg';
import comsystoLogo from './img/comsysto-logo.png';
import { IoIosWarning, IoIosStarOutline } from 'react-icons/io';

class App extends Component {
  constructor(props) {
    super(props);
    this.foo = 'bar';
  }

  render() {
    return (
      <>
        <div className="container-fluid cs-header">
          <div className="cs-header-inner">
            <div className="row">
              <div className="col-xl-2"></div>
              <div className="col-sm-12 col-md-4 col-xl-3 d-flex justify-content-center">
                <div className="cs-header__logo">
                  <img
                    src={logo}
                    className="text-center"
                    style={{ maxWidth: '300px' }}
                    alt="Scaled Resolutions your MacBooks external Monitor"
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-8 col-xl-5">
                <h1 className="cs-header__h1">Scaled Resolutions</h1>
                <h2 className="cs-header__h2">for your MacBooks external Monitor</h2>
                <h4 className="cs-header__h4">
                  Display Override PropertyList File Parser and Generator with HiDPI support
                </h4>
                <div className="cs-header__star">
                  <a
                    href="https://github.com/comsysto/Display-Override-PropertyList-File-Parser-and-Generator-with-HiDPI-Support-For-Scaled-Resolutions"
                    className="cs-header__starlink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoIosStarOutline /> star on github
                  </a>
                </div>
              </div>
              <div className="col-xl-2"></div>
            </div>
          </div>
        </div>

        <div className="container-fluid cs-body">
          <div className={appStyles.app}>
            <PlistContainer />
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
                        <strong>This tool is provided without warranty</strong>. Comsysto Reply is
                        not responsible for damages to your system. It is heavily discouraged to
                        edit files in <em>/System/</em> directory. You are doing it at your own
                        risk.
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
                  All external monitors are identified by <em>AppleDisplay</em> and internal
                  monitors by <em>AppleBacklightDisplay</em>. So if you want to set scale
                  resolutions for your external monitor you will need to look at the second line.
                  Identify at the end of the line your <strong>DisplayVendorId</strong> as{' '}
                  <code>10ac</code> and your <strong>DisplayProductID</strong> as <code>d06e</code>{' '}
                  and note these values. Now insert them into the corresponding input fields on the
                  top left and the generator will generate a basic plist file for you.
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
                  Now you can customize the <strong>Scale Resolutions</strong>. For example you
                  could enter <strong>2560x1440</strong> and enable <strong>HiDPI</strong>. Be aware
                  that the generator does not do any sanity checks for you, what you enter is just
                  getting encoded. Please be aware that depending on your monitor and internal
                  mac-checkups during startup some resolutions might not work. <br />
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
                  sudo cp ~/Downloads/DisplayProductID-d06e.plist
                  /System/Library/Displays/Contents/Resources/Overrides/DisplayVendorID-10ac/DisplayProductID-d06e
                </div>
                <p>
                  <strong>NOTE:</strong> That you might need to{' '}
                  <a href="http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/">
                    disable System Integrity Protection
                  </a>{' '}
                  (at your own risk) to copy files to <code>/System/</code>. If you are running
                  macOS Catalina or above, see the note below.
                </p>
                <p>
                  <strong>NOTE:</strong> On macOS Catalina systems (or{' '}
                  <a href="https://developer.apple.com/forums/thread/649832">above</a>), the{' '}
                  <code>/System/</code> folder is mounted read-only, so instead you should copy the
                  file to{' '}
                  <code>
                    /Library/Displays/Contents/Resources/Overrides/DisplayVendorID-10ac/DisplayProductID-d06e
                  </code>
                  . This can be done without disabling System Integrity Protection.
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
                  Now you can change your resolution to the ones you entered (if macOS did not
                  disable them during boot check-ups)
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
            <div className="row mt-5">
              <div className="col-md-5 mt-5" style={{ backgroundColor: '#f4f5f7' }}>
                <div className={appStyles.csBox}>
                  <h4>Aspect Ratio Calculator</h4>

                  <p>
                    Use this calculator to calculcate horizontal and vertical resolution based on
                    given Aspect Ratio.
                  </p>
                  <AspectRatioCalculator />
                </div>
              </div>
              <div className="col-sm-12 col-md-2">&nbsp;</div>
              <div className="col-md-5 mt-5" style={{ backgroundColor: '#f4f5f7' }}>
                <div className={appStyles.csBox}>
                  <h4>We hire you or you hire us!</h4>
                  <p>Looking for someone to write your React or Angular application?</p>
                  <p>
                    Your search has come to an end.{' '}
                    <a href="https://comsysto.com/leistungen">Check out our services</a>
                    .<br />
                    You are a developer yourself?{' '}
                    <a href="https://comsysto.com/karriere">Checkout our openings</a>.
                  </p>
                  <p />
                </div>
              </div>
            </div>
            {/*
        <div className="row">
          <h4>BlogPost + Todos</h4>
          <p>16:9 HiDPI geht nicht für Dell. Nur 16:10 mit schwarzem rand (Siehe:
            <ul>
              <li>Todo: Advanced EDID Injection to force 16:9 HiDPI Resolutions to work => http://www.insanelymac.com/forum/topic/281412-how-to-advanced-edid-injection/</li>
              <li>TODO: owto for commandline see if resolution was activated after boot.</li>
              <li>TODO: make DisplayList download ad `*.plist` and have unix line endings</li>
            </ul>
            <pre>
            http://apple.stackexchange.com/questions/204769/hidpi-on-external-monitor-dell-u2515h-with-macbook-pro?rq=1
            http://www.insanelymac.com/forum/topic/310345-qhd-monitor-1920x1080-hidpi/
            http://www.insanelymac.com/forum/topic/310345-qhd-monitor-1920x1080-hidpi/page-2
            </pre>
          </p>
        </div>*/}
          </div>
        </div>
        <div className="container-fluid cs-footer">
          <div className="cs-footer-inner">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 text-center">
                <strong>
                  Made with love and <a href="https://facebook.github.io/react/">React</a> by
                </strong>
                <br />
                <a href="https://comsysto.com">
                  <img src={comsystoLogo} alt="Comsysto Reply" style={{ width: '200px' }} />
                </a>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 d-flex justify-content-center">
                <a href="https://legal.comsysto.com/comsysto.github.io/de/impressum/">
                  <span style={{ fontSsize: '0.8rem' }}>Imprint</span>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://legal.comsysto.com/comsysto.github.io/de/datenschutz/">
                  <span style={{ fontSsize: '0.8rem' }}>Data Privacy Statement</span>
                </a>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
