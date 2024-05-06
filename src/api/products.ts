import axios from 'axios';
import { Payle } from 'payle';

const baseURL = 'http://localhost:3001';

export async function create(params: Payle.ProductCreateParams): Promise<Payle.Product> {
  const response = await axios.post(`${baseURL}/products`, params);
  return response.data;
}

export async function list(params: Payle.ProductListParams): Promise<Payle.ApiList<Payle.Product>> {
  try {
    const response = await axios.get(`${baseURL}/products?${params}`);
    return response.data;
  } catch (error) {
    console.error('Error listing products:', error);
    throw error;
  }
}

export async function retrieve(id: string, params: Payle.ProductListParams): Promise<Payle.Product> {
  try {
    const response = await axios.get(`${baseURL}/products/${id}?${params}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving product:', error);
    throw error;
  }
}

export async function update(id: string, params: Payle.ProductUpdateParams): Promise<Payle.Product> {
  try {
    const response = await axios.patch(`${baseURL}/products/${id}`, params);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

export async function del(id: string, params: Payle.ProductDeleteParams): Promise<Payle.DeletedProduct>{
  try {
    const response = await axios.delete(`${baseURL}/products/${id}?${params}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}