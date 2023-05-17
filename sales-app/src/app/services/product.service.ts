import { httpCLient } from "app/http";
import { Product } from "app/models/products";
import { AxiosResponse } from "axios";

const resourceURL:string = "/api/products"

export const useProductService = () =>{

    const save = async (product:Product):Promise<Product> =>{

        const response: AxiosResponse<Product> = await httpCLient.post<Product>(resourceURL, product)
        
        return response.data
    }

    return {

        save
    }
}