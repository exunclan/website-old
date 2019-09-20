import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => (
  <div
    style={{
      flexBasis: 1,
      border: '1px solid #eaeaef',
      padding: '2.5rem',
    }}
  >
    {children}
  </div>
);
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
