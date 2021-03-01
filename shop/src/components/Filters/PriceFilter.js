import React from 'react';
import { makeStyles, Typography, Slider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../redux/actions';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function valuetext(value) {
  return `${value} $`;
}
export default function PriceFilter({ data }) {
  const dispatch = useDispatch();
  const price = [...new Set(data.map((item) => item.price))];
  //const minPrice = Math.min(...price);
  const maxPrice = Math.max(...price);
  const classes = useStyles();
  const [value, setValue] = React.useState([0, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    dispatch(filterActions.setPriceFilter(value));
  };

  return (
    <div className={classes.root}>
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