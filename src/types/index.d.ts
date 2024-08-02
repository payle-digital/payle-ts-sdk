/// <reference path="./Products.d.ts" />
/// <reference path="./ProductsResource.d.ts" />
declare module 'payle' {
  export namespace Payle {}

  export class Payle {
    constructor(apiKey: string);

    products: Payle.ProductsResource;
    payments: Payle.PaymentsResource;
  }

  export default Payle;
}