/// <reference path="../src/enums/Currency.d.ts" />
/// <reference path="../src/enums/PaymentMethod.d.ts" />
/// <reference path="../src/types/Account.d.ts" />
/// <reference path="../src/types/Balance.d.ts" />
/// <reference path="../src/types/BalanceResource.d.ts" />
/// <reference path="../src/types/BankAccount.d.ts" />
/// <reference path="../src/types/BankAccountResource.d.ts" />
/// <reference path="../src/types/Charges.d.ts" />
/// <reference path="../src/types/Customers.d.ts" />
/// <reference path="../src/types/CustomersResource.d.ts" />
/// <reference path="../src/types/PaymentLinks.d.ts" />
/// <reference path="../src/types/Payments.d.ts" />
/// <reference path="../src/types/PaymentsResource.d.ts" />
/// <reference path="../src/types/Products.d.ts" />
/// <reference path="../src/types/ProductsResource.d.ts" />
/// <reference path="../src/types/lib.d.ts" />
/// <reference path="../src/types/shared.d.ts" />
/// <reference path="../src/types/index.d.ts" />
import * as BalanceAPI from './api/balance';
import * as BankAccountAPI from './api/bankAccount';
import * as CustomersAPI from './api/customers';
import * as PaymentsAPI from './api/payments';
import * as ProductsAPI from './api/products';
import { Payle as PayleModule } from 'payle';
declare class Payle {
    private apiKey;
    private baseURL;
    constructor(apiKey: string, options?: PayleModule.PayleConfig);
    balance: {
        retrieve: typeof BalanceAPI.retrieve;
    };
    bankAccount: {
        retrieve: typeof BankAccountAPI.retrieve;
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
    products: {
        create: typeof ProductsAPI.create;
        list: typeof ProductsAPI.list;
        retrieve: typeof ProductsAPI.retrieve;
        update: typeof ProductsAPI.update;
        delete: typeof ProductsAPI.del;
    };
}
export default Payle;
