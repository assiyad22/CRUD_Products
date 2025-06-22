package com.app.product_crud.Service;

import com.app.product_crud.Exception.ResourceNotFoundException;
import com.app.product_crud.Model.Product;
import com.app.product_crud.Repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() { return productRepository.findAllByOrderByIdAsc(); }


    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> createProducts(List<Product> products) {
        return productRepository.saveAll(products);
    }

    @Override
    public Product updateProduct(Long id, Product updatedProduct) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));

        product.setName(updatedProduct.getName());
        product.setDescription(updatedProduct.getDescription());
        product.setPrice(updatedProduct.getPrice());

        return productRepository.save(product);
    }

    @Override
    public List<Product> updateMultipleProducts(List<Product> products) {
        return products.stream()
                .map(product -> {
                    Product existingProduct = productRepository.findById(product.getId())
                            .orElseThrow(() -> new ResourceNotFoundException(
                                    "Product not found with id: " + product.getId()
                            ));
                    existingProduct.setName(product.getName());
                    existingProduct.setDescription(product.getDescription());
                    existingProduct.setPrice(product.getPrice());
                    
                    return productRepository.save(existingProduct);
                })
                .collect(Collectors.toList());
    }

    @Override
    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));

        productRepository.delete(product);
    }

    @Override
    @Transactional
    public void deleteMultipleProducts(List<Long> productIds) {
        productIds.forEach(id -> {
            if (!productRepository.existsById(id)) {
                throw new ResourceNotFoundException("Product not found with id: " + id);
            }
        });

        productRepository.deleteAllByIdInBatch(productIds);
    }
}
