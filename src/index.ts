import axios from 'axios';
import * as PaymentsAPI from './api/payments';
import * as ProductsAPI from './api/products';

class Payle {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    axios.defaults.headers.common['api-key'] = this.apiKey
  }

  public products = {
    create: ProductsAPI.create,
    list: ProductsAPI.list,
    retrieve: ProductsAPI.retrieve,
    update: ProductsAPI.update,
    delete: ProductsAPI.del
  };

  public payments = {
    create: PaymentsAPI.create,
    list: PaymentsAPI.list,
    retrieve: PaymentsAPI.retrieve
  }
}

export default Payle;