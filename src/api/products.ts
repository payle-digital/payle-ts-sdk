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