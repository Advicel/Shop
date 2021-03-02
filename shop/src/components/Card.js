import React from 'react';
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Checkbox,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { basketActions } from '../redux/actions';

const useStyles = makeStyles(
  {
    root: {
      minWidth: 275,
      maxWidth: 300,
      marginBottom: 20,
      marginRight: '20px',
    },
    pos: {
      marginBottom: 12,
    },
  },
  {
    name: 'SimpleCard',
  }
);

export default function SimpleCard({ card, indexInBasket }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = () => {
    if (indexInBasket === -1) {
      dispatch(
        basketActions.addToBasket({
          card: card,
          count: 1,
        })
      );
    } else {
      dispatch(basketActions.deleteFromBasket(indexInBasket));
    }
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Checkbox
          checked={indexInBasket !== -1}
          onChange={handleChange}
          color='primary'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Typography variant='h5' component='h2'>
          {card.name}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {`${card.price} $ `}
        </Typography>
        <Typography variant='body2' component='p'>
          {`Производитель: ${card.maker}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  card: PropTypes.object,
  indexInBasket: PropTypes.number,
};