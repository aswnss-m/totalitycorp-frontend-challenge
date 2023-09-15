// import React from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Login from './pages/Login'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
