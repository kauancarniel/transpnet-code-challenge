import { ICategoty } from "@/interfaces/Icategory";
import { IProduct } from "@/interfaces/IProduct";

export const requestApi = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    const products: IProduct[] = data.products;
    return products
  }

export const searchRequestApi = async (searchTerm: string) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
  const data = await response.json();
  const products: IProduct[] = data.products;
  return products
};

export const getProductById = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  const product: IProduct = data;
  return product
};

export const getAllCategories = async () => {
  const response = await fetch('https://dummyjson.com/products/categories');
  const data = await response.json();
  const allCategories: ICategoty[] = data;
  return allCategories
};

export const getByCategories = async (category: string) => {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data = await response.json();
  const allCategories = data;
  return allCategories
};
