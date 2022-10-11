import React from 'react';
import Home from './Home';
import Recipes from './Recipes';
import {Route, Routes} from 'react-router-dom';
import About from './About';
import Searched from './Searched';


function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes/:type' element={<Recipes />} />
      <Route path='/about' element={<About />} />
      <Route path='/searched/:search' element={<Searched />} />
    </Routes>
  )
}

export default Pages