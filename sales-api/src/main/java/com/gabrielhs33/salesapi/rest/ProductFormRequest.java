package com.gabrielhs33.salesapi.rest;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.gabrielhs33.salesapi.models.Product;

import java.math.BigDecimal;
import java.time.LocalDate;

public class ProductFormRequest {

     private Long id;
    private String description;
    private String name;
    private BigDecimal price;
    private String sku;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate registerDate;

    public ProductFormRequest(){}
    public ProductFormRequest(Long id,  String name, String description, BigDecimal price, String sku, LocalDate registerDate){

        this.id = id;
        this.description = description;
        this.name = name;
        this.price = price;
        this.sku = sku;
        this.registerDate =  registerDate;
    }

    public Product toModel(){

        return  new Product(id, name, description, price, sku);
    }

    public static ProductFormRequest fromModel(Product product){

        return new ProductFormRequest(product.getId(), product.getName(), product.getDescription(), product.getPrice(), product.getSku(),product.getRegisterDate());
    }


    public String getDescription() {
        return description;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getSku() {
        return sku;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(LocalDate registerDate) {
        this.registerDate = registerDate;
    }

    @Override
    public String toString() {
        return "ProductFormRequest{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", sku='" + sku + '\'' +
                '}';
    }
}
