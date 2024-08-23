import axios from 'axios'

import { Payle as PayleModule } from 'payle'
import * as AccountAPI from './api/account'
import * as CustomersAPI from './api/customers'
import * as PaymentsAPI from './api/payments'
import * as PayoutsAPI from './api/payouts'
import * as ProductsAPI from './api/products'

class Payle {
  private apiKey: string
  private baseURL: string

  constructor(apiKey: string, options?: PayleModule.PayleConfig) {
    this.apiKey = apiKey
    this.baseURL = options?.baseURL || 'https://api.payle.digital'
    axios.defaults.headers.common['api-key'] = this.apiKey
    axios.defaults.baseURL = this.baseURL
  }

  public account = {
    retrieve: AccountAPI.retrieve,
    retrieveBalance: AccountAPI.retrieveBalance,
    retrieveFees: AccountAPI.retrieveFees,
    retrieveBankAccount: AccountAPI.retrieveBankAccount,
  }

  public customers = {
    create: CustomersAPI.create,
    retrieve: CustomersAPI.retrieve,
    update: CustomersAPI.update,
    delete: CustomersAPI.del,
    list: CustomersAPI.list,
  }

  public payments = {
    create: PaymentsAPI.create,
    list: PaymentsAPI.list,
    retrieve: PaymentsAPI.retrieve,
  }

  public paymentLinks = {}

  public payouts = {
    list: PayoutsAPI.list,
    retrieve: PayoutsAPI.retrieve,
  }

  public products = {
    create: ProductsAPI.create,
    list: ProductsAPI.list,
    retrieve: ProductsAPI.retrieve,
    update: ProductsAPI.update,
    delete: ProductsAPI.del,
  }
}

export default Payle
