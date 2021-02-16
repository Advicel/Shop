import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {connect} from 'react-redux';
import Fade from '@material-ui/core/Fade';
import BasketList from './BasketList.js';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
  shoppingCart:{
    height:40,
    width:40,
  },
}));

function BasketModal({basket}) {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label='cart' onClick={handleOpen}>
        <StyledBadge  badgeContent={basket.length||null} color='secondary' >
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