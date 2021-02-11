import { makeStyles } from '@material-ui/core';
import React from 'react';
import CategoryFilter from './CategoryFilter.js';
import PriceFilter from './PriceFilter.js';
import Search from './Search.js';

export default function Filters({ data }) {
  const styles = useStyles();
  const filters = (
    <div className={styles.filtersWrapper}>
      <CategoryFilter data={data} />
      <Search />
      <PriceFilter data={data} />
    </div>
  );
  return filters;
}

const useStyles = makeStyles(
  {
    filtersWrapper: {
      display: 'flex',
      justifyContent:"space-around",
    },
  },
  {
    name: 'Filters',
  }
);