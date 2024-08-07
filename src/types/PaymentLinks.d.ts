declare module 'payle' {
    export namespace Payle {
        interface PaymentLink {
            id: string;
            object: 'payment_link';
            active: boolean;
            allow_promotion_codes: boolean;
            amount: number;
            created: Date;
            currency: Payle.Currency;
            description: string | null;
            livemode: boolean;
            payment_methods: Array<PaymentLinkPaymentMethods>;
            type: 'quick';
            title: string;
            url: string;
        }

        interface PaymentLinkPaymentMethods {
            payment_method: Payle.PaymentMethod;
            max_installment_count: number;
        }
    }
}