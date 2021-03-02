import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Paper, InputBase, IconButton, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { filterActions } from '../../redux/actions';

const useStyles = makeStyles(
  {
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '40%',
      height: 35,
    },
    input: {
      marginLeft: 10,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  },
  {
    name: 'Search',
  }
);

export default function Search() {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  function onChange(event) {
    setValue(event.target.value);
  }
  let debouncedOnChange = debounce(onChange);

  useEffect(() => {
    dispatch(filterActions.setNamePattern(value));
  }, [value]);

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search'
        svalue={value}
        onChange={debouncedOnChange}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
        disabled>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

const debounce = (fn) => {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, 300);
  };
};
