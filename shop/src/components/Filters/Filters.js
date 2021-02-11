import { makeStyles } from '@material-ui/core';
import React from 'react';
import CategoryFilter from './CategoryFilter.js';
import PriceFilter from './PriceFilter.js';
import Paper from '@material-ui/core/Paper';

//import Search from './Search.js';

export default function Filters({ data }) {
  const styles = useStyles();
  const filters = (
    <Paper className={styles.filters} elevation={3}>
      <div className={styles.filtersWrapper}>
        <CategoryFilter data={data} />
        <PriceFilter data={data} />
      </div>
    </Paper>
  );
  return filters;
}

const useStyles = makeStyles(
  {
    filters:{
      minWidth:200,

    },
    filtersWrapper: {
      margin:"0 auto",
      width:"80%",
      // display: 'flex',
      // justifyContent:"space-around",
    },
  },
  {
    name: 'Filters',
  }
);