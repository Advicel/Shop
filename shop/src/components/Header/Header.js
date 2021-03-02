import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BasketModal from '../Basket/BasketModal';
import Search from '../Filters/Search.js';
import logo from '../../imgs/harvest.svg';
import Menu from '../Menu/Menu';

const useStyles = makeStyles(
  {
    header: {
      background:
        'linear-gradient(90deg, rgba(241,255,246,1) 0%, rgba(104,233,149,1) 30%, rgba(6,198,60,1) 100%)',
      height: 110,
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
      width: 80,
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
          <Menu onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  onClick: PropTypes.func,
};

