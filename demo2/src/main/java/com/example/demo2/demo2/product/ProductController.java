package com.example.demo2.demo2.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo2.demo2.Flight;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/flight")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/")
    public List<Flight> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping("/")
    public Flight addProduct(@RequestBody Flight product) {
        return productRepository.save(product);
    }

    @GetMapping("/{id}")
    public Flight getProductById(@PathVariable Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @PutMapping("/{id}")
    public Flight updateProduct(@PathVariable Long id, @RequestBody Flight updatedProduct) {
        Flight existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        existingProduct.setStatus(updatedProduct.getStatus());
        return productRepository.save(existingProduct);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
        return "Product deleted";
    }
}

