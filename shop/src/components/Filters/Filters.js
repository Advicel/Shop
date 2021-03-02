import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter.js';
import PriceFilter from './PriceFilter.js';

const useStyles = makeStyles(
  {
    filters: {
      paddingTop: 10,
      minWidth: 200,
      height: 'fit-content',
    },
    filtersWrapper: {
      margin: '0 auto',
      width: '80%',
    },
  },
  {
    name: 'Filters',
  }
);

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

Filters.propTypes = {
  data: PropTypes.array,
};