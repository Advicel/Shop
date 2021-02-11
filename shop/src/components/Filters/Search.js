import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { setNamePattern } from '../../redux/actions';

function Search({ setNamePattern }) {
  const classes = useStyles();
  const handleChangePattern = (event) =>{
    setNamePattern(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField id='standard-basic' label='Standard' onChange={handleChangePattern}/>
    </form>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const mapDispatchToProps = {
  setNamePattern,
};

export default connect(null, mapDispatchToProps)(Search);