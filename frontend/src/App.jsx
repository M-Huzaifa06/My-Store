import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignUp from './pages/LoginSignUp'
import Cart from './pages/Cart'
import Footer from './components/Footer/Footer'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="Men"/>} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="Women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="Kid"/>} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route> 
        
        <Route path='/cart' element={<Cart />} />
        <Route path='/login-signup' element={<LoginSignUp />} />

      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
