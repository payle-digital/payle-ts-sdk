import { Payle } from 'payle';
import * as ProductsAPI from './api/products';

class PayleSDK {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public products = {
    create: (params: Payle.ProductCreateParams) => ProductsAPI.create(params, this.apiKey),
    list: (params: Payle.ProductListParams) => ProductsAPI.list(params, this.apiKey),
    retrieve: (id: string, params: Payle.ProductRetrieveParams) => ProductsAPI.retrieve(id, params, this.apiKey),
    update: (id: string, params: Payle.ProductUpdateParams) => ProductsAPI.update(id, params, this.apiKey),
    delete: (id: string, params: Payle.ProductDeleteParams) => ProductsAPI.del(id, params, this.apiKey)
  };
}

export default PayleSDK;