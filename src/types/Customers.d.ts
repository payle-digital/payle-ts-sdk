declare module 'payle' {
    export namespace Payle {
        interface Customer {
            id: string;
            object: 'customer';
            created: Date;
            email: string;
            livemode: boolean;
            name: string | null;
            phone: string | null;
            cpfCnpj: string | null;
            whatsAppNotificationEnabled: boolean;
            smsNotificationEnabled: boolean;
            emailNotificationEnabled: boolean;
            updated: Date;
        }

        interface DeletedCustomer {
            object: 'deleted_customer';
            id: string;
        }
    }
}