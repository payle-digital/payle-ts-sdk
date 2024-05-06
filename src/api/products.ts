import axios from 'axios';
import { Payle } from 'payle';

const baseURL = 'https://api.payle.digital';

export async function create(params: Payle.ProductCreateParams, apiKey: string): Promise<Payle.Product> {
  try {
    const response = await axios.post<Payle.Product>(`${baseURL}/products`, params, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

export async function list(params: Payle.ProductListParams, apiKey: string): Promise<Payle.ApiList<Payle.Product>> {
  try {
    const response = await axios.get(`${baseURL}/products?${params}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error listing products:', error);
    throw error;
  }
}

export async function retrieve(id: string, params: Payle.ProductListParams, apiKey: string): Promise<Payle.Product> {
  try {
    const response = await axios.get(`${baseURL}/products/${id}?${params}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error retrieving product:', error);
    throw error;
  }
}

export async function update(id: string, params: Payle.ProductUpdateParams, apiKey: string): Promise<Payle.Product> {
  try {
    const response = await axios.patch(`${baseURL}/products/${id}`, params, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

export async function del(id: string, params: Payle.ProductDeleteParams, apiKey: string): Promise<Payle.DeletedProduct>{
  try {
    const response = await axios.delete(`${baseURL}/products/${id}?${params}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}