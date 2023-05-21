import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout.jsx";  //used this to remove the extra spaces of the Header & Footer

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Error from "./pages/Error.jsx";
import Posts from "./pages/Posts.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>  
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="Posts" element={<Posts />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
