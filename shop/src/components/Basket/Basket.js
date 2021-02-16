import React from 'react';
import BasketList from './BasketList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
  {
    basketWrapper: {
      margin: '0 auto',
      width: '60%',
      //display: 'flex',
      height: '100vh',
      //overflowY: 'scroll',
      padding:15,
    },
  },
  {
    name: 'Basket',
  }
);

export default function Basket() {
  const styles = useStyles();
  return (
    <Paper className={styles.basketWrapper}>
      <BasketList />
    </Paper>
  );
}
