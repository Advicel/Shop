import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import './styles/styles.css';
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import ThemeSwitcher from './components/ThemeSwitcher.js';
import BusketModal from './components/modal/BasketModal.js';

export default function App({ data }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' ,overflowY:"scroll"}}>
        <Header />
        <ThemeSwitcher
          onChange={() => setDarkMode(!darkMode)}
          value={darkMode}
        />
        <BusketModal/>
        <Body data={data} />
      </Paper>
    </ThemeProvider>
  );
}