package com.gabrielhs33.salesapi.rest;

import com.gabrielhs33.salesapi.models.Product;
import com.gabrielhs33.salesapi.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @GetMapping
    public List<ProductFormRequest> getList(){

        return repository.findAll().stream().map(ProductFormRequest::fromModel).collect(Collectors.toList());
    }

    @PostMapping
     public ProductFormRequest save( @RequestBody ProductFormRequest product ){

        Product p1 = product.toModel();
        repository.save(p1);
        return ProductFormRequest.fromModel(p1);
     }

     @PutMapping("{id}")
     public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody ProductFormRequest product){

        Optional<Product> existingProduct = repository.findById(id);

        if(existingProduct.isEmpty()){

            return ResponseEntity.notFound().build();
        }

        Product p1 = product.toModel();
        p1.setId(id);
        repository.save(p1);

        return ResponseEntity.ok().build();
     }
}
