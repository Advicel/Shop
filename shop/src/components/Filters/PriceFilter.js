import React from 'react';
import { Typography, Slider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../redux/actions';
import PropTypes from 'prop-types';

function valuetext(value) {
  return `${value} $`;
}
export default function PriceFilter({ data }) {
  const dispatch = useDispatch();
  const price = [...new Set(data.map((item) => item.price))];
  const maxPrice = Math.max(...price);
  const [value, setValue] = React.useState([0, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    dispatch(filterActions.setPriceFilter(value));
  };

  return (
    <div>
      <Typography id='range-slider' gutterBottom>
        Price range
      </Typography>
      <Slider
        min={0}
        max={maxPrice}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleClick}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider'
        getAriaValueText={valuetext}
      />
    </div>
  );
}

PriceFilter.propTypes = {
  data: PropTypes.array,
};