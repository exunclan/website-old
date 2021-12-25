import React from 'react';
import IvyAchievement from './ivyachievement.png';

const logoStyles = {
  height: '60px',
  width: 'auto',
};

export default () => (
  <>
    <div
      style={{
        margin: '1em 0',
        paddingBottom: '',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
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
            Powered by
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              maxWidth: '500px',
              width: '100%',
              padding: '0 15px',
            }}
          >
            <img
              alt="Ivy Achievement"
              src={IvyAchievement}
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
