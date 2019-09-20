import React from 'react';

import Container from './container';

import styles from './footer.module.css';

const Footer = () => (
  <div className={styles.wrapper}>
    <Container
      style={{
        textAlign: 'center',
      }}
    >
      <a href="//facebook.com">Facebook</a>
      &nbsp;&middot;&nbsp;
      <a href="//lnexun.com">ln(exun)</a>
    </Container>
  </div>
);

export default Footer;
