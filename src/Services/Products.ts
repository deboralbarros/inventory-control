import api from './index';
import { Product } from '../Models/Product';

export const getProducts = () => api.get<Product[]>('/products/').then(data => data.data);

export const retrieveProduct = (productCode: string) => api.get<Product>(`/products/${productCode}`).then(data => data.data);

export const addProduct = (product: Product) => api.post<Product>('/products/', product).then(data => data.data);

export const editProduct = (product: Product) => api.patch<Product>(`/products/${product.code}`, product).then(data => data.data);

export const deleteProduct = (productCode: string) => api.delete<Product>(`/products/${productCode}`);
