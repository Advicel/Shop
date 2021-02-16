import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import BasketModal from '../Basket/BasketModal';
import Search from '../Filters/Search.js';
import logo from '../../imgs/harvest.svg';
import CustomizedMenus from '../Menu/Menu.js';
import NewMenu from '../Menu/NewMenu'; 

export default function Header({ onClick }) {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to='/'>
          <img className={styles.logo} src={logo} />
        </Link>

        <Search />
        <div className={styles.menuPlusBasket}>
          <BasketModal />
          <CustomizedMenus onClick={onClick} />
        </div>
        <NewMenu onClick={onClick}/>
      </div>
    </div>
  );
}

const useStyles = makeStyles(
  {
    header: {
      background:
        'linear-gradient(90deg, rgba(241,255,246,1) 0%, rgba(104,233,149,1) 30%, rgba(6,198,60,1) 100%)',
      height: "13vh",
    },
    headerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
      height: '100%',
      margin: '0 auto',
    },
    logo: {
      width: "10vh",
    },
    menuPlusBasket: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  {
    name: 'Header',
  }
);