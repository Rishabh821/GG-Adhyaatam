import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Jumbotron from './Components/Jumbotron.jsx'
import Footer from './Components/Footer.jsx';
import Product from './Components/Product.jsx';
import ProductSpec from './Components/Productspecs.jsx'
import Review from './Components/Reviews.jsx';
import Checkout from './Components/Checkout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Jumbotron />
    <Product/>
    <ProductSpec />
    <Checkout />
    <Review />    
  </StrictMode>,
)
