import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux';
import { currentFilter } from '../redux/actions';

function Filters({ currentFilter, filter, data }) {
  const category = [...new Set(data.map((item) => item.category))];
  const [value, setValue] = React.useState('All');

  const handleChange = (event) => {
    setValue(event.target.value);
    currentFilter(event.target.value);
  };
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Filter</FormLabel>
      <RadioGroup
        aria-label='gender'
        name='gender1'
        value={value}
        onChange={handleChange}>
        <FormControlLabel value={'All'} control={<Radio />} label={'All'} />
        {category.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter.filter,
  };
};
const mapDispatchToProps = {
  currentFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
