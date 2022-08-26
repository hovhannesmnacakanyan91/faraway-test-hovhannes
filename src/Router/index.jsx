import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import People from '../pages/People';
import Person from '../pages/Person';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/people' element={<People />} />
      <Route path='/people/:personId' element={<Person />} />
    </Routes>
  );
};

export default Router;
