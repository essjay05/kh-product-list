import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

// import ProductCard from './components/Card/ProductCard'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={'/products/:id'} element={<Product />}/>
      </Routes>
    </>
  );
}

export default App;
