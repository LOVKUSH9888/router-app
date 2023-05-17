import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Error from './pages/Error.jsx'
import Posts from './pages/Posts.jsx'
import SingleProduct from './pages/SingleProduct.jsx'


// import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="singleproduct" element={<SingleProduct/>}/>
        <Route path="Posts" element={<Posts/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
