import React from 'react';

import BMLLogo from './bml-munjal-logo.png';
import EvelynLogo from './evelyn-logo.png';
import OxfordLogo from './oxford.jpg';
import DigitalIndia from './digitalindia.jpg';
import WolframLogo from './wolfram.png';
import DevfolioLogo from './devfolio.png';
import AthenaLogo from './athena.png';
import WwcDelhiLogo from './wwc.jpeg';

const logoStyles = {
  height: '150px',
  width: 'auto',
};

export default () => (
  <>
    <div
      style={{
        // borderTop: '1px solid #eaeaef',
        margin: '3em 0',
        // padding: '3em 0',
        paddingBottom: '',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <img alt="BML Munjal University" src={BMLLogo} style={logoStyles} />
        <img alt="Athena" src={AthenaLogo} style={logoStyles} />
        {/* <img alt="Digital India" src={DigitalIndia} style={logoStyles} /> */}
      </div>
      <div
        style={{
          maxWidth: '900px',
          margin: '30px auto',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '30px',
              marginBottom: '30px',
              textAlign: 'center',
              marginTop: '30px',
            }}
          >
            Community Partners
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <img
              alt="Wolfram"
              src={WolframLogo}
              style={{ height: '70px', width: 'auto' }}
            />
            <img
              alt="Women Who Code Delhi"
              src={WwcDelhiLogo}
              style={{ height: '70px', width: 'auto' }}
            />
          </div>
        </div>
        <div>
          <div>
            <div
              style={{
                fontSize: '30px',
                marginBottom: '30px',
                textAlign: 'center',
                marginTop: '30px',
              }}
            >
              Hackathon Partner
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <img
                alt="Devfolio"
                src={DevfolioLogo}
                style={{ height: '50px', width: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
