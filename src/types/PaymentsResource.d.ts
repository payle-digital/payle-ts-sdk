declare module 'payle' {
    export namespace Payle {
        interface PaymentCreateParams {
            customer: string;
            type: 'installment' | 'single';
            amount: number;
            currency: string;
            installments?: number | null; // only for type=installment
            paymentMethod: 'credit_card' | 'boleto' | 'pix' | 'debit_card';
            dueDate: Date;
        }

        interface PaymentListParams extends PaginationParams {}

        interface PaymentRetrieveParams {
            expand?: Array<string>;
        }

        class PaymentsResource {
            create(params: PaymentCreateParams): Promise<Payle.Payment>;
            retrieve(id: string, params?: PaymentRetrieveParams): Promise<Payle.Payment>;
            list(params?: PaymentListParams): Promise<Payle.ApiList<Payle.Payment>>;
        }
    }
}