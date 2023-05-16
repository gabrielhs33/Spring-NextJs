package com.gabrielhs33.salesapi.rest;

import java.math.BigDecimal;

public class ProductFormRequest {

    private String description;
    private String Nome;
    private BigDecimal price;
    private String sku;

    public String getDescription() {
        return description;
    }

    public String getNome() {
        return Nome;
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

    public void setNome(String nome) {
        Nome = nome;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }
}
