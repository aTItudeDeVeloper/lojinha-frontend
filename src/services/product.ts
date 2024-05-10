import { Product } from "@/types/product";
import { getProducts } from "@/api/products"
// import { products } from "@/api/products"

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(getProducts());
        }, 2000);
    });
}