import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Product List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<ProductForm />} />
          <Route path="/edit/:id" element={<ProductForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </Router>
  );
}

export default App;