import React from 'react';

import Plaksha from './plaksha.png';
import WolframLogo from './wolfram.png';
import DevfolioLogo from './devfolio.png';
// import AthenaLogo from './athena.png';
import AOPSLogo from './aops.png';
import WwcDelhiLogo from './wwc.jpeg';
import TaskadeLogo from './taskade.png';
import Balsamiq from './balsamiq.png';
import Rosenfield from './rosenfield.png';
import Replit from './replit.png';
import styles from './sponsor.module.css';
import Cake from './interview-cake.svg';

const logoStyles = {
  height: '150px',
  width: 'auto',
};

export default () => (
  <>
    <div
      style={{
        margin: '3em 0',
      }}
    >
      <div className={styles.sponsorAll}>
        <img alt="Plaksha" src={Plaksha} style={logoStyles} />
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
          style={{ marginTop: '1.5rem', marginLeft: 'auto' }}
          className={styles.sponsorAll}
        >
          <img alt="balsamiq" src={Balsamiq} style={{ height: '100px' }} />
          <a href="http://rosenfeldmedia.com/">
            <img
              alt="rosenfield"
              src={Rosenfield}
              style={{ height: '100px', marginLeft: '2rem' }}
            />
          </a>
        </div>
        <img
          alt="replit"
          src={Replit}
          style={{ height: '80px', marginTop: '1.5rem' }}
        />
        <div style={{ marginTop: '2rem' }} className={styles.sponsorAll}>
          <img
            alt="replit"
            src={WolframLogo}
            style={{ height: '80px', marginLeft: '2rem' }}
          />
          <img
            alt="replit"
            src={AOPSLogo}
            style={{ height: '80px', marginLeft: '2rem' }}
          />
          <img
            alt="replit"
            src={TaskadeLogo}
            style={{ height: '80px', marginLeft: '2rem' }}
          />
          <img
            alt="replit"
            src={Cake}
            style={{ height: '80px', marginTop: '2rem' }}
          />
        </div>
      </div>
      <div
        style={{
          maxWidth: '900px',
          margin: '30px auto',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      ></div>
    </div>
  </>
);
