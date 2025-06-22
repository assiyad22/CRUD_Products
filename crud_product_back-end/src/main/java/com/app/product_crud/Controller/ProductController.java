package com.app.product_crud.Controller;

import com.app.product_crud.Model.Product;
import com.app.product_crud.Service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService){
        this.productService= productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {
        Product createdProduct = productService.createProduct(product);
        return ResponseEntity.ok(createdProduct);
    }

    @PostMapping("/bulk")
    public ResponseEntity<List<Product>> createProducts(@RequestBody List<Product> products) {
        List<Product> savedProducts = productService.createProducts(products);
        return ResponseEntity.ok(savedProducts);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @Valid @RequestBody Product product) {
        Product updatedProduct = productService.updateProduct(id, product);
        return ResponseEntity.ok(updatedProduct);
    }

    @PutMapping("/batch-update")
    public ResponseEntity<List<Product>> updateMultipleProducts(@Valid @RequestBody List<@Valid Product> products) {
        List<Product> updatedProducts = productService.updateMultipleProducts(products);
        return ResponseEntity.ok(updatedProducts);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/batch-delete")
    public ResponseEntity<Void> deleteMultipleProducts(@RequestBody List<Long> productIds) {
        productService.deleteMultipleProducts(productIds);
        return ResponseEntity.noContent().build();
    }
}
