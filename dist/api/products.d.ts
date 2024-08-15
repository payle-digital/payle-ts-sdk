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
/// <reference path="../../src/types/Products.d.ts" />
/// <reference path="../../src/types/ProductsResource.d.ts" />
/// <reference path="../../src/types/lib.d.ts" />
/// <reference path="../../src/types/shared.d.ts" />
/// <reference path="../../src/types/index.d.ts" />
import { Payle } from 'payle';
export declare function create(params: Payle.ProductCreateParams): Promise<Payle.Product>;
export declare function list(params: Payle.ProductListParams): Promise<Payle.ApiList<Payle.Product>>;
export declare function retrieve(id: string, params: Payle.ProductListParams): Promise<Payle.Product>;
export declare function update(id: string, params: Payle.ProductUpdateParams): Promise<Payle.Product>;
export declare function del(id: string, params: Payle.ProductDeleteParams): Promise<Payle.DeletedProduct>;
