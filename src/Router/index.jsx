import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import People from '../pages/People';
import Person from '../pages/Person';
import Films from '../pages/Films';
import Film from '../pages/Film';
import HomeWorld from '../pages/HomeWorld';
import Species from '../pages/Species';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/people' element={<People />} />
      <Route path='/people/:personId' element={<Person />} />
      <Route path='/films' element={<Films />} />
      <Route path='/films/:filmId' element={<Film />} />
      <Route path='/home-world' element={<HomeWorld />} />
      <Route path='/species' element={<Species />} />
    </Routes>
  );
};

export default Router;
