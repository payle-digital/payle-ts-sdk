import axios from 'axios'
import { Payle } from 'payle'

export async function retrieve(): Promise<Payle.BankAccount> {
  try {
    const response = await axios.get('/v1/account/bankAccount')
    return response.data
  } catch (error) {
    console.error('Error retrieving bank account:', error)
    throw error
  }
}
