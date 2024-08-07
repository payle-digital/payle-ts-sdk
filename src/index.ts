import axios from 'axios';
import * as CustomersAPI from './api/customers';
import * as PaymentsAPI from './api/payments';
import * as ProductsAPI from './api/products';

class Payle {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    axios.defaults.headers.common['api-key'] = this.apiKey
  }

  public customers = {
    create: CustomersAPI.create,
    retrieve: CustomersAPI.retrieve,
    update: CustomersAPI.update,
    delete: CustomersAPI.del,
    list: CustomersAPI.list
  }

  public payments = {
    create: PaymentsAPI.create,
    list: PaymentsAPI.list,
    retrieve: PaymentsAPI.retrieve
  }

  public paymentLinks = {}

  public products = {
    create: ProductsAPI.create,
    list: ProductsAPI.list,
    retrieve: ProductsAPI.retrieve,
    update: ProductsAPI.update,
    delete: ProductsAPI.del
  };
}

export default Payle;