import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import People from './pages/people/People';

const App = () => {
  return (
    <Provider store={store}>
      <People />
    </Provider>
  );
};

export default App;
