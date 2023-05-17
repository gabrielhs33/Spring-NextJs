package com.gabrielhs33.salesapi.repositories;

import com.gabrielhs33.salesapi.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {


}
