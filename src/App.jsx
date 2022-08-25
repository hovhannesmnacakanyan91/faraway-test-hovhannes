import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { globalOp } from './store/global';

import People from './pages/People_';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalOp.getPeople());
  }, [dispatch]);

  return <People />;
};

export default App;
