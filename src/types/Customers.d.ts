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
            cpf_cnpj: string | null;
            whatsapp_notification_enabled: boolean;
            sms_notification_enabled: boolean;
            email_notification_enabled: boolean;
            updated: Date;
        }

        interface DeletedCustomer {
            object: 'deleted_customer';
            id: string;
        }
    }
}