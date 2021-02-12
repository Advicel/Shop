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
    border: '1px solid black',
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
  console.log(basket)
  const classes = useStyles();
  const basketExists = (id) => {
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].card.id === id) {
        return i;
      }
    }
    return -1;
  };
  const [checked, setChecked] = React.useState(basketExists(card.id) !== -1);
  const handleChange = () => {
    setChecked(!checked);
    const id = basketExists(card.id);
    if (id === -1) {
      addToBasket({
        card: card,
        count: 1,
      });
    } else {
      deleteFromBasket(id);
    }
    //console.log(basket);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          color='primary'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        {/* <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom>
          Word of the Day
        </Typography> */}
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