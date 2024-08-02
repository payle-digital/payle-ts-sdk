declare module 'payle' {
    export namespace Payle {
        interface Payment {
            id: string;
            object: 'payment';
            amount: number;
            amountReceived: number;
            created: Date;
            currency: string;
            livemode: boolean;
            status: 'pending' | 'paid' | 'partially_paid' | 'failed' | 'refunded' | 'cancelled';
            type: 'installment' | 'single';
            installments: number | null;
            paymentMethod: 'credit_card' | 'boleto' | 'pix' | 'debit_card'
            hostedPaymentUrl: string | null;
            updated: Date;
            charges: Array<Payle.Charge>;
        }
    }
}