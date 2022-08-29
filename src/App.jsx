import React, { useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { globalOp } from './store/global';

import { ThemeProvider } from '@mui/material';
import Layout from './layout';
import Main from './layout/Main';

import theme from './theme';
import './globalStyles.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalOp.getPeople());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Main />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
