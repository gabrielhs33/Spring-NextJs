package com.gabrielhs33.salesapi.rest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/products")
public class ProductController {
    @PostMapping
     public ProductFormRequest save( @RequestBody ProductFormRequest product ){

        return product;
     }
}
