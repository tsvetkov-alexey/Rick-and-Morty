import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import "./scss/styles.scss";

import {Header, Footer, Loader } from './components';

import Home from './pages/Home';

const MoreInfo = React.lazy(() => import(/* webpackChunkName: "MoreInfo" */'./pages/MoreInfo'))
const Characters = React.lazy(() => import(/* webpackChunkName: "Characters" */'./pages/Characters'))
const AllCharacters = React.lazy(() => import(/* webpackChunkName: "AllCharacters" */'./pages/AllCharacters'))


const App = () => {

   return (
      <>
      <Header />
      <Routes>
         <Route path='/' element={<Home />}  />
         <Route path='/:id' element={
            <Suspense fallback={<Loader />}>
               <MoreInfo />
            </Suspense> 
            } />
         <Route path='/character/:id' element={ 
            <Suspense fallback={<Loader />}>
               <Characters />
            </Suspense> 
            } />
         <Route path='/character' element={ 
            <Suspense fallback={<Loader />}>
               <AllCharacters />
            </Suspense> 
            } />
      </Routes>
      <Footer />
      </>
   )
}
export default App;