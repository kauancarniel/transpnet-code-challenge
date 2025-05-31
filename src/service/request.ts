import { IProduct } from "@/interfaces/IProduct";

export const requestApi = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    const products: IProduct[] = data.products;
    return products
  }