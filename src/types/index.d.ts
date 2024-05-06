///<reference path="./ProductsResource.d.ts" />
///<reference path="./Products.d.ts" />

declare module 'payle' {
  export namespace Payle {}

  export class Payle {
    static Payle: typeof Payle;

    constructor(apiKey: string);

    products: Payle.ProductsResource;
  }

  export default Payle;
}