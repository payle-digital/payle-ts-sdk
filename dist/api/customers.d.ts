/// <reference path="../../src/enums/Currency.d.ts" />
/// <reference path="../../src/enums/PaymentMethod.d.ts" />
/// <reference path="../../src/types/Account.d.ts" />
/// <reference path="../../src/types/AccountResource.d.ts" />
/// <reference path="../../src/types/Charges.d.ts" />
/// <reference path="../../src/types/Customers.d.ts" />
/// <reference path="../../src/types/CustomersResource.d.ts" />
/// <reference path="../../src/types/PaymentLinks.d.ts" />
/// <reference path="../../src/types/Payments.d.ts" />
/// <reference path="../../src/types/PaymentsResource.d.ts" />
/// <reference path="../../src/types/Payouts.d.ts" />
/// <reference path="../../src/types/PayoutsResource.d.ts" />
/// <reference path="../../src/types/Products.d.ts" />
/// <reference path="../../src/types/ProductsResource.d.ts" />
/// <reference path="../../src/types/lib.d.ts" />
/// <reference path="../../src/types/shared.d.ts" />
/// <reference path="../../src/types/index.d.ts" />
import { Payle } from 'payle';
export declare function create(params: Payle.CustomerCreateParams): Promise<Payle.Customer>;
export declare function retrieve(id: string, params: Payle.CustomerRetrieveParams): Promise<Payle.Customer>;
export declare function update(id: string, params: Payle.CustomerUpdateParams): Promise<Payle.Customer>;
export declare function del(id: string, params: Payle.CustomerDeleteParams): Promise<Payle.DeletedCustomer>;
export declare function list(params: Payle.CustomerListParams): Promise<Payle.ApiList<Payle.Customer>>;
