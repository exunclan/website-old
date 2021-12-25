import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, classes }) => (
  <div
    style={{
      maxWidth: 960,
      margin: '0 auto',
      padding: '0 2.25rem',
    }}
    className={classes && classes}
  >
    {children}
  </div>
);
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
