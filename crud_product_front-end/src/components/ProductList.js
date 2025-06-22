import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../services/ProductService";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { toast } from 'react-toastify';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const loadProducts = async () => {
    const result = await getProducts();
    setProducts(result.data);
    setFilteredProducts(result.data);
  };

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this product?");
  if (confirmDelete) {
    await deleteProduct(id);
    loadProducts();
    toast.success("Product deleted!");
 
  }
};

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
      setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredProducts(products);
    setCurrentPage(1);

  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

   useEffect(() => {
    handleSearch();
  }, [searchTerm, products]);

  return (
    <div className="page-background">
      <h2 className="mb-4 text-center" style={{ color: '#7e0af2'}}>Product List</h2>

      <div className="row mb-4">
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={handleClearSearch}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-end align-items-center">
          <small className="text-muted">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
          </small>
        </div>
      </div>

      <table className="table table-bordered table-striped table-responsive">
        <thead className="thead-dark">
          <tr>
            <th>ID</th><th>Name</th><th>Description</th><th>Price</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.length > 0 ? (
            currentProducts.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>€{new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(p.price)}
                </td>
                <td>
                  <Link to={`/edit/${p.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>{" "}
                  <button onClick={() => handleDelete(p.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                {searchTerm ? `No products found matching "${searchTerm}"` : 'No products available'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {filteredProducts.length > productsPerPage && (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <small className="text-muted">
              Page {currentPage} of {totalPages}
            </small>
          </div>
          <div>
            <button 
              className="btn btn-outline-primary me-2" 
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button 
              className="btn btn-outline-primary" 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-end mt-5">
        <Link to="/add" className="btn btn-primary">Add Product</Link>
      </div>
    </div>
  );
}

export default ProductList;
