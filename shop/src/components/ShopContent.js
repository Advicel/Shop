import { makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Card from './Card.js';

const useStyles = makeStyles(
  {
    shopContent: {
      margin: '0 auto',
      width: '70%',
    },
    cards: {
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
  },
  {
    name: 'ShopContent',
  }
);

export default function ShopContent({ data }) {
  const basket = useSelector((state) => state.basket.basket);
  const indexInBasket = (id) => basket.findIndex((x) => x.card.id === id);
  const filter = useSelector((state) => state.filter);
  const styles = useStyles();

  const isCategory = (card) =>
    card.category === filter.category || filter.category === 'All';
  const isPrice = (card) =>
    (card.price >= filter.minPrice && card.price <= filter.maxPrice) ||
    filter.maxPrice === null;
  const isName = (card) =>
    card.name.toLowerCase().includes(filter.namePattern.toLowerCase());

  const filteredData = [...data].filter(
    (card) => isCategory(card) && isPrice(card) && isName(card)
  );

  if (!filteredData.length) {
    return <h3 className={styles.shopContent}>Товары не найдены</h3>;
  }
  return (
    <div className={styles.shopContent}>
      <div className={styles.cards}>
        {filteredData.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              indexInBasket={indexInBasket(card.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

ShopContent.propTypes = {
  data: PropTypes.array,
};