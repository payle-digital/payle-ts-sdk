declare module 'payle' {
    export namespace Payle {
        interface CustomerCreateParams {
            email: string;
            name?: string | null;
            phone?: string | null;
            cpfCnpj?: string | null;
            whatsAppNotificationEnabled?: boolean;
            smsNotificationEnabled?: boolean;
            emailNotificationEnabled?: boolean;
        }

        interface CustomerListParams extends PaginationParams {}

        interface CustomerRetrieveParams {
            expand?: Array<string>;
        }

        interface CustomerUpdateParams {
            email?: string | null;
            name?: string | null;
            phone?: string | null;
            cpfCnpj?: string | null;
            whatsAppNotificationEnabled?: boolean;
            smsNotificationEnabled?: boolean;
            emailNotificationEnabled?: boolean;
        }

        interface CustomerDeleteParams {}

        class CustomersResource {
            create(params: CustomerCreateParams): Promise<Payle.Customer>;
            retrieve(id: string, params?: CustomerRetrieveParams): Promise<Payle.Customer>;
            update(id: string, params?: CustomerUpdateParams): Promise<Payle.Customer>;
            delete(id: string, params?: CustomerDeleteParams): Promise<Payle.DeletedCustomer>;
            list(params?: CustomerListParams): Promise<Payle.ApiList<Payle.Customer>>;
        }
    }
}