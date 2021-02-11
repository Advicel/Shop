import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux';
import { setPriceFilter } from '../../redux/actions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value} $`;
}
function PriceFilter({ setPriceFilter, data }) {
  const price = [...new Set(data.map((item) => item.price))];
  const minPrice = Math.min(...price);
  const maxPrice = Math.max(...price);
  //console.log(price);
  const classes = useStyles();
  const [value, setValue] = React.useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    //setPriceFilter(newValue);
    setValue(newValue);
  };
  const handleClick= () =>{
      setPriceFilter(value);
  };

  return (
    <div className={classes.root}>
      <Typography id='range-slider' gutterBottom>
        Price range
      </Typography>
      <Slider
        min={minPrice}
        max={maxPrice}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider'
        getAriaValueText={valuetext}
      />
      <Button variant='outlined' onClick = {handleClick}>
        Применить фильтр
      </Button>
    </div>
  );
}

const mapDispatchToProps = {
  setPriceFilter,
};

export default connect(null, mapDispatchToProps)(PriceFilter);