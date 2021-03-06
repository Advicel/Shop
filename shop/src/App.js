import React, { useState } from 'react';
import { Paper, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import Basket from './components/Basket/Basket';
import Profile from './components/Profile/Profile';
import Table from './components/Table/Table';
import Task1 from './components/Figma/Task1/Task1';
import './styles/styles.css';

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
          <Header onClick={() => setDarkMode(!darkMode)} />
          <Switch>
            <Route path='/Table'>
              <Table data={data} />
            </Route>
            <Route path='/Task1'>
              <Task1 />
            </Route>
            <Route path='/basket'>
              <Basket />
            </Route>
            <Route path='/profile'>
              <Profile />
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

App.propTypes = {
  data: PropTypes.array,
};