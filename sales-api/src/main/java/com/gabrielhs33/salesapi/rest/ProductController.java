package com.gabrielhs33.salesapi.rest;

import com.gabrielhs33.salesapi.entities.Product;
import com.gabrielhs33.salesapi.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/products")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @PostMapping
     public ProductFormRequest save( @RequestBody ProductFormRequest product ){

        Product p1 = new Product(product.getNome(), product.getDescription(),
                product.getPrice(), product.getSku());

        repository.save(p1);

        return product;
     }
}
