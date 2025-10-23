import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ProductByCategory from './pages/ProductByCategory';
import SearchProduct from './pages/SearchProduct';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Counter from './components/Counter'
import { ToastContainer } from 'react-toastify';
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  return (
    <Router>
      <Header />
      {/* <Counter /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/product/category/:cat" element={<ProductByCategory />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/about" element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
       {/* Your Routes / Components */}
      <ToastContainer
        position="top-right"   // top-right, top-left, bottom-right, bottom-left
        autoClose={1000}       // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"          // light, dark, colored
      />
    </Router>
    
  )

}

export default App; 