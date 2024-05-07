import { Product } from "@/types/product";
import { products } from "@/api/products"

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}