/// <reference path="./Products.d.ts" />
/// <reference path="./ProductsResource.d.ts" />
declare module 'payle' {
  export namespace Payle {}

  export class Payle {
    constructor(apiKey: string);

    customers: Payle.CustomersResource;
    payments: Payle.PaymentsResource;
    products: Payle.ProductsResource;
  }

  export default Payle;
}