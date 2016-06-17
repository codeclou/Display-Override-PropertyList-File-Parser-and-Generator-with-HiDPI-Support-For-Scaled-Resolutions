import React, { Component } from 'react';
import PlistContainer from './PlistContainer';
import AspectRatioCalculator from './AspectRatioCalculator';
import appStyles from './App.css';
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.foo = 'bar';
  }

  render() {
    return (
      <div>
        <div className={appStyles.warning}>
          <i className="fa fa-exclamation-triangle" aria-hidden="true" style={{ marginRight: '10px' }}></i>
          <strong>This tool is provided without warranty</strong>. comSysto is not responsible for damages to your system.
          It is heavily discouraged to edit files in <em>/System/</em> directory. You are doing it at your own risk.
        </div>
        <br /><br />
        <PlistContainer />

        <br /><br />
        <hr />
        <br /><br />
        <div className="row">
          <div className="col-md-12">
            <h3>How to use Scale Resolutions</h3>

            <h4 className={classNames(appStyles.numberedList, appStyles.numberedListFirst)}>Enable HiDPI Mode</h4>

            <p><code>sudo defaults write /Library/Preferences/com.apple.windowserver.plist DisplayResolutionEnabled -bool true</code></p>

            <p>See the awesome <a href="http://www.tonymacx86.com/threads/adding-using-hidpi-custom-resolutions.133254/">tonymacx86.com forum</a> for more details.</p>

            <h4 className={classNames(appStyles.numberedList, appStyles.numberedListSecond)}>Detect your Display</h4>

            <p><code>ioreg -lw0 | grep IODisplayPrefsKey</code></p>

            <p>
              All external monitors are identified by <em>AppleDisplay</em> and internal monitors by <em>AppleBacklightDisplay</em>.
            </p>

            <p>Example: When I run the command on my Mac the result is:</p>

            <p>
              <code>"IODisplayPrefsKey" = "IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/IGPU@2/AppleIntelFramebuffer@0/display0/AppleBacklightDisplay-610-a019"</code><br />
              <code>"IODisplayPrefsKey" = "IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/IGPU@2/AppleIntelFramebuffer@2/display0/AppleDisplay-10ac-d06e"</code>
            </p>
            <p>
              Since I want to set scale resolutions for my external monitor I need to look at the second line. At the end of the line
              we identify <code>10ac</code> as <strong>DisplayVendorId</strong> and <code>d06e</code> as <strong>DisplayProductID</strong>.
            </p>
            <p>Note that values and insert it them the corresponding input fields on the top right and the generator will generate a basic plist file for you.</p>

            <h4 className={classNames(appStyles.numberedList, appStyles.numberedListThird)}>Customize your resolutions</h4>

            <p>Now you can customize the <strong>Scale Resolutions</strong>. Be aware that the generator does not do any sanity checks for you, what you enter is just getting encoded.</p>
            <p>For example you could enter <strong>2560x1440</strong> and enable HiDPI.</p>

            <p>
              Please be aware that depending on your monitor and internal mac-checkups during startup some resolutions might not work.
              Again the <a href="http://www.tonymacx86.com/threads/adding-using-hidpi-custom-resolutions.133254/">tonymacx86.com forum</a> is a good place to ask questions.
            </p>

            <h4 className={classNames(appStyles.numberedList, appStyles.numberedListFourth)}>Download plist and copy to System folder</h4>

            <p>Once you have configured all your resolutions click the download button. A file called <code>DisplayProductID-*.plist</code> will download.</p>
            <p>Now copy this file to the destination that has been calculated on the top right.</p>

            <p>Example for my DELL Monitor:</p>

            <p>
              <code>sudo cp ~/Downloads/DisplayProductID-d06e.plist /System/Library/Displays/Contents/Resources/Overrides/DisplayVendorID-10ac/DisplayProductID-d06e</code>
            </p>

            <p>
              <strong>NOTE:</strong> That you might need
              to <a href="http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/">disable System Integrity Protection</a> (at
              your own risk) to copy files to <code>/System/</code>.
            </p>

            <h4 className={classNames(appStyles.numberedList, appStyles.numberedListFifth)}>Restart Mac and use Resolutions</h4>

            <p>Now you can change your resolution to the ones you entered (if macOS did not disable them during boot check-ups)</p>

            <p>A very handy <a href="https://github.com/avibrazil/RDM">tool to enable resolutions is RDM</a>.</p>

            <p>If you are more into commandline tools you might like <a href="https://github.com/jhford/screenresolution">screenresolutions</a>.</p>

            <p>And if you are willing to pay a small amount <a href="http://www.madrau.com/">SwitchResX</a> is also a great tool.</p>

          </div>

          <div className="col-md-12">
            <br /><br />
            <hr />
            <br /><br />
          </div>
        </div>
        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-md-6">
            <h4>Aspect Ratio Calculator</h4>

            <p>Use this calculator to calculcate horizontal and vertical resolution based on given Aspect Ratio.</p>

            <AspectRatioCalculator />
          </div>
          <div className="col-md-6">
            <h4>We hire you or you hire us!</h4>

            <p>Looking for someone to write your React, AngularJS 1 or Angular 2 application?</p>
            <p>Your search has come to an end. <a href="https://comsysto.com/leistungen">Check out our services</a>.</p>

            <p>You are a developer yourself? <a href="https://comsysto.com/karriere">Checkout our openings</a>.</p>
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
    );
  }
}

export default App;
