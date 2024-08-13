import axios from 'axios'
import { Payle } from 'payle'

export async function retrieve(): Promise<Payle.Balance> {
  try {
    const response = await axios.get('/v1/account/balance')
    return response.data
  } catch (error) {
    console.error('Error retrieving balance:', error)
    throw error
  }
}
