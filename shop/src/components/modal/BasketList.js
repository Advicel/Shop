import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { List, Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
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
}));

function BasketModal({ basket, deleteFromBasket, changeCardCount }) {
  console.log(basket);

  const classes = useStyles();

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
      card:basket[id].card,
      count:--newCount,
    };
    changeCardCount([id, newCard]);
  };
  const addHandler = (id) => {
    
    let newCount = basket[id].count;
    const newCard = {
      card:basket[id].card,
      count:++newCount,
    };
    changeCardCount([id, newCard]);
  };

  if (!basket.length) {
    return <h3>Корзина пуста</h3>;
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
                onClick={() => addHandler(index)}>
                <AddIcon />
              </IconButton>
              <IconButton
                edge='end'
                aria-label='comments'
                onClick={() => removeHandler(index)}>
                <RemoveIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      <ListItem>
        <ListItemText primary={'summ'} secondary={`${getBasketSumm()} $`} />
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

export default connect(getReduxState, setReduxState)(BasketModal);