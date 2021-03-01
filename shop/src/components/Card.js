import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { basketActions } from '../redux/actions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    marginBottom: 20,
    marginRight: '20px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ card, isBasketExist }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = () => {
    if (isBasketExist === -1) {
      dispatch(
        basketActions.addToBasket({
          card: card,
          count: 1,
        })
      );
    } else {
      dispatch(basketActions.deleteFromBasket(isBasketExist));
    }
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Checkbox
          checked={isBasketExist !== -1}
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
