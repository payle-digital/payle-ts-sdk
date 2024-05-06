import * as ProductsAPI from './api/products';
import axios from 'axios';

class Payle {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`
  }

  public products = {
    create: ProductsAPI.create,
    list: ProductsAPI.list,
    retrieve: ProductsAPI.retrieve,
    update: ProductsAPI.update,
    delete: ProductsAPI.del
  };
}

export default Payle;