import axios from 'axios'
import { Payle } from 'payle'

export async function create(
  params: Payle.PaymentCreateParams,
): Promise<Payle.Payment> {
  const response = await axios.post(`/v1/payments`, params)
  return response.data
}

export async function list(
  params: Payle.PaymentListParams,
): Promise<Payle.ApiList<Payle.Payment>> {
  try {
    const response = await axios.get(`/v1/payments?${params}`)
    return response.data
  } catch (error) {
    console.error('Error listing payments:', error)
    throw error
  }
}

export async function retrieve(
  id: string,
  params: Payle.PaymentRetrieveParams,
): Promise<Payle.Payment> {
  try {
    const response = await axios.get(`/v1/payments/${id}?${params}`)
    return response.data
  } catch (error) {
    console.error('Error retrieving payment:', error)
    throw error
  }
}
