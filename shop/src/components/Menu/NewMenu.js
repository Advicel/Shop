import React from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ThemeSwitcher from '../ThemeSwitcher';
import { Typography } from '@material-ui/core';


import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  switcher: {
    textAlign: 'center',
  },
  buttonMen:{
    height:"5vh",
  },
  li:{
    textDecoration:"none",
    color:"primary",
  },
},  { name: 'newMenu' });

export default function NewMenu({ onClick }) {
  const styles = useStyles();
  const [right, setState] = React.useState(true);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <div
      className={styles.list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon fontSize='small' />
          </ListItemIcon>
          <Link className={styles.li}  to='/profile' color='primary'>
            {/* <Typography color="primary">qwe</Typography> */}
            Profile
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon fontSize='small' />
          </ListItemIcon>
          <Link to='/' color='primary'>
            
            Home
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon fontSize='small' />
          </ListItemIcon>
          <Link to='/basket' color='primary'>
            Basket
          </Link>
        </ListItem>
      </List>

    </div>
  );

  return (
    <div>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={toggleDrawer(true)}>
        Open Menu
      </Button>
      {/* <Button onClick={toggleDrawer(true)}>{'right'}</Button> */}
      <Drawer anchor={'right'} open={right} onClose={toggleDrawer(false)}>
        {list()}
        <div className={styles.switcher}>
          <ThemeSwitcher
            onChange={onClick}
            // value={darkMode}
          />
        </div>
      </Drawer>
    </div>
  );
}
