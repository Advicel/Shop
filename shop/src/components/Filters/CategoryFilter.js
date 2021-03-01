import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../redux/actions';

export default function CategoryFilter({ data }) {
  const dispatch = useDispatch();
  const category = [...new Set(data.map((item) => item.category))];
  const [value, setValue] = React.useState('All');

  const handleChangeCategory = (event) => {
    setValue(event.target.value);
    dispatch(filterActions.currentFilter(event.target.value));
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