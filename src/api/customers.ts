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
    const query = new URLSearchParams()

  if (params.relations && params.relations.length > 0) {
    query.append('relations', params.relations.join(','))
  }
    const response = await axios.get(`/v1/customers/${id}?${query}`)
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
    const query = new URLSearchParams()
    if (params.limit) query.append('limit', params.limit.toString())
    if (params.ending_before) query.append('ending_before', params.ending_before)
    if (params.starting_after)
      query.append('starting_after', params.starting_after)

    if (params.relations && params.relations.length > 0) {
      query.append('relations', params.relations.join(','))
    }

    const response = await axios.get(`/v1/customers?${query}`)
    return response.data
}
