import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function ThemeSwitcher({onChange,value}) {
  return (
    <div>
      <Switch
        checked={value}
        onChange={onChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
