import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { currentFilter } from '../../redux/actions';

function CategoryFilter({ currentFilter, data }) {
  const category = [...new Set(data.map((item) => item.category))];
  const [value, setValue] = React.useState('All');

  const handleChangeCategory = (event) => {
    setValue(event.target.value);
    currentFilter(event.target.value);
  };
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Select Category</FormLabel>
      <RadioGroup
        aria-label='category'
        name='category1'
        value={value}
        onChange={handleChangeCategory}>
        <FormControlLabel value={'All'} control={<Radio />} label={'All'} />
        {category.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

const mapDispatchToProps = {
  currentFilter,
};

export default connect(null, mapDispatchToProps)(CategoryFilter);