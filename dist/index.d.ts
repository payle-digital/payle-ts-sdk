import * as CustomersAPI from './api/customers';
import * as PaymentsAPI from './api/payments';
import * as ProductsAPI from './api/products';
declare class Payle {
    private apiKey;
    constructor(apiKey: string);
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
    products: {
        create: typeof ProductsAPI.create;
        list: typeof ProductsAPI.list;
        retrieve: typeof ProductsAPI.retrieve;
        update: typeof ProductsAPI.update;
        delete: typeof ProductsAPI.del;
    };
}
export default Payle;
