import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import { basketActions } from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  h3: {
    margin: 0,
  },
  summ: {
    backgroundColor: '#fdfdd5',
  },
}));

export default function BasketList() {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const styles = useStyles();

  const getBasketSumm = () =>
    basket.reduce((sum, card) => sum + card.count * card.card.price, 0);
  const removeHandler = (id) => {
    if (basket[id].count === 1) {
      dispatch(basketActions.deleteFromBasket(id));
      return;
    }
    dispatch(basketActions.changeCardCount([id, -1]));
  };
  const addHandler = (id) => {
    dispatch(basketActions.changeCardCount([id, +1]));
  };

  if (!basket.length) {
    return <h3 className={styles.h3}>Корзина пуста</h3>;
  }
  return (
    <List>
      {basket.map((card, index) => {
        return (
          <ListItem key={card.card.id}>
            <ListItemText
              primary={card.card.name}
              secondary={`${card.card.price}$ x ${card.count}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                aria-label='comments'
                onClick={() => removeHandler(index)}>
                <RemoveIcon />
              </IconButton>

              <IconButton
                edge='end'
                aria-label='comments'
                onClick={() => addHandler(index)}>
                <AddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}

      <ListItem className={styles.summ}>
        <ListItemText primary={'Itog:'} secondary={`${getBasketSumm()} $`} />
      </ListItem>
    </List>
  );
}