import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { setNamePattern } from '../../redux/actions';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    height:40,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function Search({setNamePattern}) {
  const classes = useStyles();

  const changeHanler = (event) => {
    setNamePattern(event.target.value);
  };

  return (
    <Paper component='form' className={classes.root}>
      <InputBase className={classes.input} placeholder='Search' onChange={changeHanler}/>
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
        disabled
        >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

const mapDispatchToProps = {
  setNamePattern,
};

export default connect(null, mapDispatchToProps)(Search);