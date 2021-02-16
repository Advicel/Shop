import React from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Badge,
  IconButton,
  makeStyles,
  withStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import BasketList from './BasketList.js';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

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
  shoppingCart: {
    height: 40,
    width: 40,
  },
  basketWrapper: {
    margin: '0 10px',
  },
}));

function BasketModal({ basket }) {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.basketWrapper}>
      <IconButton aria-label='cart' onClick={handleOpen}>
        <StyledBadge badgeContent={basket.length || null} color='secondary'>
          <ShoppingCartIcon className={styles.shoppingCart} />
        </StyledBadge>
      </IconButton>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={styles.paper}>
            <h2 id='transition-modal-title'>Basket</h2>
            <BasketList />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const getReduxState = (state) => {
  return {
    basket: state.basket.basket,
  };
};

export default connect(getReduxState, null)(BasketModal);