import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Collection from './components/collection/Collection'
import Footer from './components/footer/Footer'
import Product from './components/product/Product'
import Cart from './components/cart/Cart'
import CheckOut from './components/checkOut/CheckOut'
import Payment from './components/payment/Payment'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Footer />
      

    </>
  )
}

export default App
