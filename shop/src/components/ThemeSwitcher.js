import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';

export default function ThemeSwitcher({ onChange }) {
  const [value, setValue] = useState(false);
  const changeHandler = () => {
    onChange();
    setValue(!value);
  };
  return (
    <div>
      <Switch
        checked={value}
        onChange={changeHandler}
        name='checkedA'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}

ThemeSwitcher.propTypes = {
  onChange: PropTypes.func,
};