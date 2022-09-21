import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home'
import Transition from './Component/Transition'
import Contact from './Component/Contact'
import Transfer from './Component/Transfer'
const App = () => {
  return (
    <BrowserRouter>
       <Header />
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/transition' element={<Transition/>}/>
              <Route exact path='/transfer' element={<Transfer/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App

