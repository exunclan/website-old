import React from 'react';

import BMLLogo from './bml-munjal-logo.png';
import EvelynLogo from './evelyn-logo.png';
import OxfordLogo from './oxford.jpg';
import DigitalIndia from './digitalindia.jpg';

const logoStyles = {
  height: '100px',
  width: 'auto',
};

export default () => (
  <>
    <div
      style={{
        // borderTop: '1px solid #eaeaef',
        margin: '3em 0',
        padding: '3em 0',
        paddingBottom: '',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <img alt="BML Munjal University" src={BMLLogo} style={logoStyles} />
        <img alt="Evelyn" src={EvelynLogo} style={logoStyles} />
        <img alt="Oxford" src={OxfordLogo} style={logoStyles} />
        <img alt="Digital India" src={DigitalIndia} style={logoStyles} />
      </div>
    </div>
  </>
);
