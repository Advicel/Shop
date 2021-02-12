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
import { addToBasket, deleteFromBasket } from '../../redux/actions';

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

function BasketModal({ basket, deleteFromBasket}) {
  console.log(basket);
  
//   //КАСТЫЛЬ
//   const [refresh, setRefresh] = useState(false);

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
    }
    // //КАСТЫЛЬ
    // setRefresh(!refresh);
    console.log('remove', id);
  };
  const addHandler = () => {
    console.log('add');
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
              <IconButton edge='end' aria-label='comments' onClick={addHandler}>
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
};

export default connect(getReduxState, setReduxState)(BasketModal);