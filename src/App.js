import { BrowserRouter as Router, Link, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Login from "./components/Login";
import Search from "./components/products/Search";
import AddProduct from "./components/products/AddProduct";
import ProductDisplay from "./components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="products" element={<Products />}>
        <Route path="search" element={<Search />}>
          {/* Nested routes for the search route */}
          <Route path="list" element={<ListProducts />} />
          {/* Add more nested routes here if needed */}
        </Route>
        <Route path="add" element={<AddProduct />} />
        <Route path=":id" element={<ProductDisplay />} />
      </Route>
    </Routes>
  </Router>
  
  );
}

export default App;
