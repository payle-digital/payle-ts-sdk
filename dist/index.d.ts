/// <reference path="../src/enums/Currency.d.ts" />
/// <reference path="../src/enums/PaymentMethod.d.ts" />
/// <reference path="../src/types/Account.d.ts" />
/// <reference path="../src/types/AccountResource.d.ts" />
/// <reference path="../src/types/Charges.d.ts" />
/// <reference path="../src/types/Customers.d.ts" />
/// <reference path="../src/types/CustomersResource.d.ts" />
/// <reference path="../src/types/PaymentLinks.d.ts" />
/// <reference path="../src/types/Payments.d.ts" />
/// <reference path="../src/types/PaymentsResource.d.ts" />
/// <reference path="../src/types/Payouts.d.ts" />
/// <reference path="../src/types/PayoutsResource.d.ts" />
/// <reference path="../src/types/Products.d.ts" />
/// <reference path="../src/types/ProductsResource.d.ts" />
/// <reference path="../src/types/lib.d.ts" />
/// <reference path="../src/types/shared.d.ts" />
/// <reference path="../src/types/index.d.ts" />
import { Payle as PayleModule } from 'payle';
import * as AccountAPI from './api/account';
import * as CustomersAPI from './api/customers';
import * as PaymentsAPI from './api/payments';
import * as PayoutsAPI from './api/payouts';
import * as ProductsAPI from './api/products';
declare class Payle {
    private apiKey;
    private baseURL;
    constructor(apiKey: string, options?: PayleModule.PayleConfig);
    account: {
        retrieve: typeof AccountAPI.retrieve;
        retrieveBalance: typeof AccountAPI.retrieveBalance;
        retrieveFees: typeof AccountAPI.retrieveFees;
        retrieveBankAccount: typeof AccountAPI.retrieveBankAccount;
    };
    customers: {
        create: typeof CustomersAPI.create;
        retrieve: typeof CustomersAPI.retrieve;
        update: typeof CustomersAPI.update;
        delete: typeof CustomersAPI.del;
        list: typeof CustomersAPI.list;
    };
    payments: {
        create: typeof PaymentsAPI.create;
        list: typeof PaymentsAPI.list;
        retrieve: typeof PaymentsAPI.retrieve;
    };
    paymentLinks: {};
    payouts: {
        list: typeof PayoutsAPI.list;
        retrieve: typeof PayoutsAPI.retrieve;
    };
    products: {
        create: typeof ProductsAPI.create;
        list: typeof ProductsAPI.list;
        retrieve: typeof ProductsAPI.retrieve;
        update: typeof ProductsAPI.update;
        delete: typeof ProductsAPI.del;
    };
}
export default Payle;
