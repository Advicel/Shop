import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, Button} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import ThemeSwitcher from '../ThemeSwitcher';

import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(
  {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
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
  { name: 'newMenu' }
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

  const list = () => (
    <div
      className={styles.list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem className={styles.li} button>
          <ListItemIcon>
            <PersonIcon fontSize='small' />
          </ListItemIcon>
          <Link className={styles.link} to='/profile' color='primary'>
            <Typography color='textPrimary'>Profile</Typography>
          </Link>
        </ListItem>
        <ListItem className={styles.li} button>
          <ListItemIcon>
            <HomeIcon fontSize='small' />
          </ListItemIcon>
          <Link className={styles.link} to='/' color='primary'>
            <Typography color='textPrimary'>Home</Typography>
          </Link>
        </ListItem>
        <ListItem className={styles.li} button>
          <ListItemIcon>
            <ShoppingCartIcon fontSize='small' />
          </ListItemIcon>
          <Link className={styles.link} to='/basket' color='primary'>
            <Typography color='textPrimary'>Basket</Typography>
          </Link>
        </ListItem>
        <ListItem className={styles.li} button>
          <ListItemIcon>
            <ShoppingCartIcon fontSize='small' />
          </ListItemIcon>
          <Link className={styles.link} to='/Table' color='primary'>
            <Typography color='textPrimary'>table</Typography>
          </Link>
        </ListItem>
        <ListItem className={styles.li} button>
          <ListItemIcon>
            <ShoppingCartIcon fontSize='small' />
          </ListItemIcon>
          <Link className={styles.link} to='/Task1' color='primary'>
            <Typography color='textPrimary'>task1</Typography>
          </Link>
        </ListItem>
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
