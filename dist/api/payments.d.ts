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
export declare function create(params: Payle.PaymentCreateParams): Promise<Payle.Payment>;
export declare function list(params: Payle.PaymentListParams): Promise<Payle.ApiList<Payle.Payment>>;
export declare function retrieve(id: string, params: Payle.PaymentRetrieveParams): Promise<Payle.Payment>;
