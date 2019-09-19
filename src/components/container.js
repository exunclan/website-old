import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div
    style={{
      maxWidth: 960,
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
