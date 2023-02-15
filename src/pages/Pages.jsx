import React from 'react';
import Home from './Home';
import Recipes from './Recipes';
import Recipe from './Recipe';
import {Route, Routes, useLocation} from 'react-router-dom';
import Searched from './Searched';
import {AnimatePresence} from 'framer-motion';


function Pages() {
  const location = useLocation();
  return (
    <div style={{flexGrow: '1'}} className='container-lg pb-3'>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/recipes/:type' element={<Recipes />} />
          <Route path='/searched/:search' element={<Searched />} />
          <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages