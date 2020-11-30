import React from 'react';

import Container from './container';

import styles from './footer.module.css';

const Footer = () => (
  <div className={styles.wrapper}>
    <Container>
      <a target="_blank" href="//facebook.com/ExunClan">Facebook</a>
      &nbsp;&middot;&nbsp;
      <a target="_blank" href="//lnexun.com">ln(exun)</a>
      &nbsp;&middot;&nbsp;
      <a target="_blank" href="//dpsrkp.net">Delhi Public School, R.K. Puram</a>
    </Container>
  </div>
);

export default Footer;
