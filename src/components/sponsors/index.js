import React from 'react';

import IvyAchievement from './ivyachievement.png';

const logoStyles = {
  height: '60px',
  width: 'auto',
};

export default () => (
  <>
    <div style={{ textAlign: 'center', fontSize: '30px' }}>Powered by</div>
    <div
      style={{
        margin: '1em 0',
        paddingBottom: '',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img alt="Ivy Achievement" src={IvyAchievement} style={logoStyles} />
    </div>
  </>
);
