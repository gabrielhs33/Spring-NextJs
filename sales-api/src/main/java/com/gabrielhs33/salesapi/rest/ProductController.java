package com.gabrielhs33.salesapi.rest;

import com.gabrielhs33.salesapi.models.Product;
import com.gabrielhs33.salesapi.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @PostMapping
     public ProductFormRequest save( @RequestBody ProductFormRequest product ){

        Product p1 = product.toModel();
        repository.save(p1);
        return ProductFormRequest.fromModel(p1);
     }
}
