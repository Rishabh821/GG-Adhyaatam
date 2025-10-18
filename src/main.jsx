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
import ProductSpex from './Components/prospex1.jsx'
import Review1 from './Components/Review1.jsx'
import Review2 from './Components/Review2.jsx'
import FAQ from './Components/FAQ.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Jumbotron />
    <Product/>
    <ProductSpex />
    <Review2 />
    <FAQ />
    <Footer />
    
  </StrictMode>,
)
