import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { globalOp } from './store/global';

import { ThemeProvider } from '@mui/material';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

import theme from './theme';
import './globalStyles.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalOp.getPeople());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
