import React from 'react';

import BMLLogo from './bml-munjal-logo.png';
import EvelynLogo from './evelyn-logo.png';

const logoStyles = {
  height: '100px',
  width: 'auto',
};

export default () => (
  <>
    <div
      style={{
        borderTop: '1px solid #eaeaef',
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
        }}
      >
        <img alt="BML Munjal University" src={BMLLogo} style={logoStyles} />
        <img alt="Evelyn" src={EvelynLogo} style={logoStyles} />
      </div>
    </div>
  </>
);
