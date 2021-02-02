import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.filterLabel}>
    Find contacts
    <input
      className={s.filterInput}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Enter name for Search"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
