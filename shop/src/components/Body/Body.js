import { makeStyles } from '@material-ui/core';
import React from 'react';
import ShopContent from '../ShopContent';
import Filters from '../Filters/Filters.js';

const useStyles = makeStyles(
  {
    bodyWrapper: {
      display: 'flex',
      width: '95%',
      marginTop: 15,
      margin: '0 auto',
    },
  },
  {
    name: 'Body',
  }
);

export default function Body({ data }) {
  const styles = useStyles();
  return (
    <div className={styles.body}>
      <div className={styles.bodyWrapper}>
        <Filters data={data} />
        <ShopContent data={data} />
      </div>
    </div>
  );
}

