/// <reference path="./Account.d.ts" />
/// <reference path="./AccountResource.d.ts" />
/// <reference path="./Products.d.ts" />
/// <reference path="./ProductsResource.d.ts" />
/// <reference path="./Customers.d.ts" />
/// <reference path="./CustomersResource.d.ts" />
/// <reference path="./Payments.d.ts" />
/// <reference path="./PaymentsResource.d.ts" />
/// <reference path="./Payouts.d.ts" />
/// <reference path="./PayoutsResource.d.ts" />
/// <reference path="./lib.d.ts" />
/// <reference path="./shared.d.ts" />
/// <reference path="./Charges.d.ts" />
/// <reference path="./PaymentLinks.d.ts" />
/// <reference path="../enums/Currency.d.ts" />
/// <reference path="../enums/PaymentMethod.d.ts" />

declare module 'payle' {
  export namespace Payle {}

  export class Payle {
    constructor(apiKey: string, config?: Payle.PayleConfig)
    account: Payle.AccountResource
    customers: Payle.CustomersResource
    payments: Payle.PaymentsResource
    payouts: Payle.PayoutsResource
    products: Payle.ProductsResource
  }

  export default Payle
}
