import React, { useState, useEffect } from "react";
import { createProduct, getProductById, updateProduct } from "../services/ProductService";
import { useNavigate, useParams } from "react-router-dom";

function ProductForm() {
  const [product, setProduct] = useState({ name: "", description: "", price: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductById(id).then(response => {
        setProduct(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Price validation
  const price = parseFloat(product.price);
    if (price <= 0) {
      alert("Price cannot be zero or negative. Please provide a valid amount");
      
      return;
    }

    if (id) {
      await updateProduct(id, product);
    } else {
      await createProduct(product);
    }

    navigate("/");
  };

  const handleCancel = () => {
    navigate("/"); 
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4 text-center" style={{ color: '#1bb392'}}>{id ? "Edit Product" : "Adding a new Product"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              name="price"
              type="number"
              value={product.price}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success me-2">
            {id ? "Update" : "Save"}
          </button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
