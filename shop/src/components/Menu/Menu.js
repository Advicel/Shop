import React from 'react';
import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ThemeSwitcher from '../ThemeSwitcher';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles(
  {
    switcher: {
      textAlign: 'center',
    },
  },
  { name: 'Menu' }
);
export default function CustomizedMenus({ onClick }) {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleClick}>
        Open Menu
      </Button>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <StyledMenuItem>
          <ListItemIcon>
            <HomeIcon fontSize='small' />
          </ListItemIcon>
          <Link to='/' color='primary'>
            Home
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <PersonIcon fontSize='small' />
          </ListItemIcon>
          <Link to='/profile' color='primary'>
            Profile
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ShoppingCartIcon fontSize='small' />
          </ListItemIcon>
          <Link to='/basket' color='primary'>
            Basket
          </Link>
        </StyledMenuItem>
        <div className={styles.switcher}>
          <ThemeSwitcher
            onChange={onClick}
            // value={darkMode}
          />
        </div>
      </StyledMenu>
    </div>
  );
}
