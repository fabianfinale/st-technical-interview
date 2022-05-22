import React from 'react';
import PropTypes from 'prop-types';

const Searchbox = ({ value, handleChange }) => {
  return (
    <input
      type='search'
      name='searchbox'
      id='searchbox'
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

Searchbox.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Searchbox;
