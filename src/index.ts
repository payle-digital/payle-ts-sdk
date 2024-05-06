import { Payle } from 'payle';
import * as ProductsAPI from './api/products';

class Payle {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public products = {
    create: (params: Payle.ProductCreateParams) => ProductsAPI.create(params, this.apiKey)
  };
}

export default Payle;