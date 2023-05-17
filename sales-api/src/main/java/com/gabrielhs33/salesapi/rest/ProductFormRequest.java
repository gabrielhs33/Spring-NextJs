package com.gabrielhs33.salesapi.rest;

import java.math.BigDecimal;

public class ProductFormRequest {

    private String description;
    private String name;
    private BigDecimal price;
    private String sku;

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

    public void setNome(String name) {
        this.name = name;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    @Override
    public String toString() {
        return "ProductFormRequest{" +
                "description='" + description + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", sku='" + sku + '\'' +
                '}';
    }
}
