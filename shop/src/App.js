import React, { useState } from 'react';
import getData from './data/getData.js';
import ShopContent from './components/ShopContent.js';
import Filters from './components/Filters/Filters.js';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer.js';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import './styles/styles.css';
import ThemeSwitcher from './components/ThemeSwitcher.js';

export default function App() {
  const data = getData();

  const store = createStore(
    rootReducer,
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Paper style={{ height: '100vh' }}>
          <Filters data={data} />
          <ThemeSwitcher onChange ={()=>setDarkMode(!darkMode)} value = {darkMode}/>
          <ShopContent data={data} />
        </Paper>
      </Provider>
    </ThemeProvider>
  );
}