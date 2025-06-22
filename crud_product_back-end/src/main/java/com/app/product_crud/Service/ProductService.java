package com.app.product_crud.Service;

import com.app.product_crud.Model.Product;
import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product createProduct(Product product);

    List<Product> createProducts(List<Product> products);

    Product updateProduct(Long id, Product product);

    List<Product> updateMultipleProducts(List<Product> products);

    void deleteProduct(Long id);

    void deleteMultipleProducts(List<Long> productIds);


}
