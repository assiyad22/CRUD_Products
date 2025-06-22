package com.app.product_crud.Service;

import com.app.product_crud.Model.Product;
import com.app.product_crud.Repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class ProductServiceTest {
    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductServiceImpl productService;

    public ProductServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetProductById() {
        Product product = new Product("Test Product", "Test Description", 99.99);
        product.setId(1L);
        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        Product result = productService.getProductById(1L);
        assertEquals("Test Product", result.getName());
        assertEquals(99.99, result.getPrice());
    }
}
