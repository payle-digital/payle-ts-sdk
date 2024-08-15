import axios from 'axios'
import { Payle } from 'payle'

export async function retrieve(): Promise<Payle.Account> {
  try {
    const response = await axios.get('/v1/account')
    return response.data
  } catch (error) {
    console.error('Error retrieving account:', error)
    throw error
  }
}

export async function retrieveFees(): Promise<Payle.AccountFees> {
  try {
    const response = await axios.get('/v1/account/fees')
    return response.data
  } catch (error) {
    console.error('Error retrieving fees:', error)
    throw error
  }
}

export async function retrieveBalance(): Promise<Payle.Balance> {
  try {
    const response = await axios.get('/v1/account/balance')
    return response.data
  } catch (error) {
    console.error('Error retrieving balance:', error)
    throw error
  }
}

export async function retrieveBankAccount(): Promise<Payle.BankAccount> {
  try {
    const response = await axios.get('/v1/account/bank-account')
    return response.data
  } catch (error) {
    console.error('Error retrieving bank account:', error)
    throw error
  }
}
