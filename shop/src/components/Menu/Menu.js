import React from 'react';
import {
  Drawer,
  Button,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';

const useStyles = makeStyles(
  {
    list: {
      width: 250,
    },
    switcher: {
      textAlign: 'center',
    },
    buttonMenu: {
      height: 35,
    },
    li: {
      position: 'relative',
    },
    link: {
      textDecoration: 'none',
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
    },
  },
  { name: 'Menu' }
);

export default function NewMenu({ onClick }) {
  const styles = useStyles();
  const [right, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };
  const menuItems = [
    { path: '/profile', name: 'Profile', icon: 'personIcon' },
    { path: '/', name: 'Home', icon: 'home' },
    { path: '/basket', name: 'Basket', icon: 'shoppingCart' },
    { path: '/Table', name: 'Table', icon: '' },
    { path: '/Task1', name: 'Task1', icon: '' },
  ];
  const icons = (icon) => {
    switch (icon) {
      case 'personIcon':
        return <PersonIcon fontSize='small' />;
      case 'home':
        return <HomeIcon fontSize='small' />;
      case 'shoppingCart':
        return <ShoppingCartIcon fontSize='small' />;
      default:
        return <PersonIcon fontSize='small' />;
    }
  };
  const list = () => (
    <div
      className={styles.list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem className={styles.li} key={item.name} button>
              <ListItemIcon>{icons(item.icon)}</ListItemIcon>
              <Link className={styles.link} to={item.path} color='primary'>
                <Typography color='textPrimary'>{item.name}</Typography>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      <Button
        className={styles.buttonMenu}
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={toggleDrawer(true)}>
        Open Menu
      </Button>
      <Drawer anchor={'right'} open={right} onClose={toggleDrawer(false)}>
        {list()}
        <div className={styles.switcher}>
          <ThemeSwitcher onChange={onClick} />
        </div>
      </Drawer>
    </div>
  );
}

NewMenu.propTypes = {
  onClick: PropTypes.func,
};
