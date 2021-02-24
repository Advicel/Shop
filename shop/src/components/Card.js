import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { addToBasket, deleteFromBasket } from '../redux/actions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    marginBottom: 20,
    //border: '1px solid black',
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

function SimpleCard({ basket, addToBasket, deleteFromBasket, card }) {
  const classes = useStyles();
  const basketExists = (id) => basket.findIndex((x) => x.card.id === id);
  const handleChange = () => {
    const id = basketExists(card.id);
    if (id === -1) {
      addToBasket({
        card: card,
        count: 1,
      });
    } else {
      deleteFromBasket(id);
    }
  };
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Checkbox
          checked={basketExists(card.id) !== -1}
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

const getReduxState = (state) => {
  return {
    basket: state.basket.basket,
  };
};
const setReduxState = {
  addToBasket,
  deleteFromBasket,
};

export default connect(getReduxState, setReduxState)(SimpleCard);