import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper} from '@material-ui/core';
import './styles/styles.css';
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import ThemeSwitcher from './components/ThemeSwitcher.js';
import BusketModal from './components/Basket/BasketModal.js';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Basket from './components/Basket/Basket';
import Profile from './components/Profile/Profile';

const history = createBrowserHistory();

export default function App({ data }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh', overflowY: 'scroll' }}>
        <Router>
          <Header />
          <ThemeSwitcher
            onChange={() => setDarkMode(!darkMode)}
            value={darkMode}
          />
          <BusketModal />

          <Switch>
            <Route path='/basket'>
              <Basket />
            </Route>
            <Route path ='/profile'>
                <Profile/>
            </Route>
            <Route path='/'>
              <Body data={data} />
            </Route>
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}