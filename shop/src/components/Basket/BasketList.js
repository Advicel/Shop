import React from 'react';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import {
  addToBasket,
  deleteFromBasket,
  changeCardCount,
} from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '50%',
  },
  h3: {
    margin: 0,
  },
  summ: {
    backgroundColor: '#fdfdd5',
  },
}));

function BasketList({ basket, deleteFromBasket, changeCardCount }) {
  const styles = useStyles();

  const getBasketSumm = () => {
    let summ = 0;
    basket.forEach((card) => {
      summ += card.count * card.card.price;
    });
    return summ;
  };
  const removeHandler = (id) => {
    if (basket[id].count === 1) {
      deleteFromBasket(id);
      return;
    }
    let newCount = basket[id].count;
    const newCard = {
      card: basket[id].card,
      count: --newCount,
    };
    changeCardCount([id, newCard]);
  };
  const addHandler = (id) => {
    let newCount = basket[id].count;
    const newCard = {
      card: basket[id].card,
      count: ++newCount,
    };
    changeCardCount([id, newCard]);
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
const getReduxState = (state) => {
  return {
    basket: state.basket.basket,
  };
};
const setReduxState = {
  addToBasket,
  deleteFromBasket,
  changeCardCount,
};

export default connect(getReduxState, setReduxState)(BasketList);