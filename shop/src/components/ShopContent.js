import { makeStyles } from '@material-ui/core';
import React from 'react';
import Card from './Card.js';
import { connect } from 'react-redux';

function ShopContent({ filter, data }) {
  const styles = useStyles();
  data = data.filter(
    (card) =>
      (card.category === filter.category || filter.category === 'All') &&
      ((card.price >= filter.minPrice && card.price <= filter.maxPrice) ||
        filter.minPrice === null) &&
      card.name.toLowerCase().startsWith(filter.namePattern.toLowerCase())
  );

  if (!data.length) {
    return <h3 className={styles.shopContent}>Товыры не найдены</h3>;
  }
  return (
    <div className={styles.shopContent}>
      {data.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}

const useStyles = makeStyles(
  {
    shopContent: {
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '80%',
    },
  },
  {
    name: 'ShopContent',
  }
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(ShopContent);
  