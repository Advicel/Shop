import React from 'react';
import { connect } from 'react-redux';
import { Paper, InputBase, IconButton, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { setNamePattern } from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    height: "4vh",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function Search({ setNamePattern }) {
  const classes = useStyles();

  const changeHanler = (event) => {
    setNamePattern(event.target.value);
  };

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search'
        onChange={changeHanler}
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

const mapDispatchToProps = {
  setNamePattern,
};

export default connect(null, mapDispatchToProps)(Search);