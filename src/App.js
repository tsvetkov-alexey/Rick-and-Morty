import React from 'react';
import { Route, Routes } from 'react-router-dom';

import "./scss/styles.scss"

import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';

const App = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />}  />
         <Route path='/:id' element={<MoreInfo />}  />
      </Routes>
   )
}
export default App;