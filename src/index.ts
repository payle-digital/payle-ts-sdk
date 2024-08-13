import axios from 'axios'

import * as BalanceAPI from './api/balance'
import * as BankAccountAPI from './api/bankAccount'
import * as CustomersAPI from './api/customers'
import * as PaymentsAPI from './api/payments'
import * as ProductsAPI from './api/products'
import { Payle as PayleModule } from 'payle'

class Payle {
  private apiKey: string
  private baseURL: string

  constructor(apiKey: string, options?: PayleModule.PayleConfig) {
    this.apiKey = apiKey
    this.baseURL = options?.baseURL || 'https://api.payle.digital'
    axios.defaults.headers.common['api-key'] = this.apiKey
    axios.defaults.baseURL = this.baseURL
  }

  public balance = {
    retrieve: BalanceAPI.retrieve,
  }

  public bankAccount = {
    retrieve: BankAccountAPI.retrieve,
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

  public products = {
    create: ProductsAPI.create,
    list: ProductsAPI.list,
    retrieve: ProductsAPI.retrieve,
    update: ProductsAPI.update,
    delete: ProductsAPI.del,
  }
}

export default Payle
