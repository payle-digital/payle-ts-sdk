import axios from 'axios'
import { Payle } from 'payle'

export async function create(
  params: Payle.CustomerCreateParams,
): Promise<Payle.Customer> {
  const response = await axios.post(`/v1/customers`, params)
  return response.data
}

export async function retrieve(
  id: string,
  params: Payle.CustomerRetrieveParams,
): Promise<Payle.Customer> {
  try {
    const response = await axios.get(`/v1/customers/${id}?${params}`)
    return response.data
  } catch (error) {
    console.error('Error retrieving customer:', error)
    throw error
  }
}

export async function update(
  id: string,
  params: Payle.CustomerUpdateParams,
): Promise<Payle.Customer> {
  try {
    const response = await axios.patch(`/v1/customers/${id}`, params)
    return response.data
  } catch (error) {
    console.error('Error updating customer:', error)
    throw error
  }
}

export async function del(
  id: string,
  params: Payle.CustomerDeleteParams,
): Promise<Payle.DeletedCustomer> {
  try {
    const response = await axios.delete(`/v1/customers/${id}?${params}`)
    return response.data
  } catch (error) {
    console.error('Error deleting customer:', error)
    throw error
  }
}

export async function list(
  params: Payle.CustomerListParams,
): Promise<Payle.ApiList<Payle.Customer>> {
  try {
    const response = await axios.get(`/v1/customers?${params}`)
    return response.data
  } catch (error) {
    console.error('Error listing customers:', error)
    throw error
  }
}
