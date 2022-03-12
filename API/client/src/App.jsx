import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Navigate to="/login" replace />}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Navigate to="/register" replace />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>

          
      </Routes>
    </BrowserRouter>
  );
};

export default App;