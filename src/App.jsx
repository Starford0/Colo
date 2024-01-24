import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LadingPage';
import Header from './Components/Header/Header';
import CategoryPage from './Components/Categories/CategoryPage';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import Register from './Components/Register/Register';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path= "/" element={<LandingPage />} />
        <Route path='category/:name' element={<CategoryPage />} />
        <Route path='cart' element={<Cart />} />
        <Route path='register' element={<Register/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
