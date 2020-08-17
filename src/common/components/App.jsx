import React, { Component } from 'react';
import PlistContainer from './PlistContainer';
import AspectRatioCalculator from './AspectRatioCalculator';
import appStyles from './App.module.css';
import logo from './img/logo-scaled-resolutions.svg';
import comsystoLogo from './img/comsysto-logo.png';
import { IoIosStarOutline, IoIosHeart } from 'react-icons/io';

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
          </div>
        </div>
        <div className="container-fluid cs-footer">
          <div className="cs-footer-inner">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 text-center">
                <strong>
                  Made with <IoIosHeart /> and <a href="https://facebook.github.io/react/">React</a>{' '}
                  by
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
