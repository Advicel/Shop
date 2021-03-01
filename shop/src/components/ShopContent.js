import { makeStyles } from '@material-ui/core';
import React from 'react';
import Card from './Card.js';
import { useSelector } from 'react-redux';

export default function ShopContent({ data }) {
  const basket = useSelector((state) => state.basket.basket);
  const basketExists = (id) => basket.findIndex((x) => x.card.id === id);
  const filter = useSelector((state) => state.filter);
  const styles = useStyles();

  const isCategory = (card) =>
    card.category === filter.category || filter.category === 'All';
  const isPrice = (card) =>
    (card.price >= filter.minPrice && card.price <= filter.maxPrice) ||
    filter.maxPrice === null;
  const isName = (card) =>
    card.name.toLowerCase().includes(filter.namePattern.toLowerCase());

  data = data.filter(
    (card) => isCategory(card) && isPrice(card) && isName(card)
  );

  if (!data.length) {
    return <h3 className={styles.shopContent}>Товыры не найдены</h3>;
  }
  return (
    <div className={styles.shopContent}>
      <div className={styles.cards}>
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              isBasketExist={basketExists(card.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

const useStyles = makeStyles(
  {
    shopContent: {
      margin: '0 auto',
      width: '80%',
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