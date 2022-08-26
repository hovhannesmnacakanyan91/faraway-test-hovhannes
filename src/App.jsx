import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import People from './pages/People';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/people' element={<People />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
