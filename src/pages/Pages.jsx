import React from 'react';
import Home from './Home';
import Recipes from './Recipes';
import {Route, Routes} from 'react-router-dom';
import About from './About';


function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes/:type' element={<Recipes />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default Pages