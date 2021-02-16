import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

import BasketList from './BasketList';

const useStyles = makeStyles(
  {
    basketList: {
      height: '100vh',
      width: '60%',
      margin: '0 auto',
      padding: 15,
    },
  },
  {
    name: 'Basket',
  }
);

export default function Basket() {
  const styles = useStyles();
  return (
    <Paper className={styles.basketList}>
      <BasketList />
    </Paper>
  );
}
