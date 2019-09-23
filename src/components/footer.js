import React from 'react';

import Container from './container';

import styles from './footer.module.css';

const Footer = () => (
  <div className={styles.wrapper}>
    <Container>
      <a href="//facebook.com">Facebook</a>
      &nbsp;&middot;&nbsp;
      <a href="//lnexun.com">ln(exun)</a>
      &nbsp;&middot;&nbsp;
      <a href="//dpsrkp.net">Delhi Public School, R.K. Puram</a>
    </Container>
  </div>
);

export default Footer;
