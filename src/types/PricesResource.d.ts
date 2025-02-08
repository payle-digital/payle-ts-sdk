declare module 'payle' {
    export namespace Payle {
        interface PriceCreateParams {
            active?: boolean;
            unit_amount?: number;
            currency: string;
            billing_scheme: 'per_unit' | 'tiered';
            tiers?: {
                up_to: number | string;
                unit_amount: number;
            }[];
            custom_unit_amount?: {
                enabled: boolean;
                minimum?: number;
                maximum?: number;
                preset?: number;
            };
            product_id: string;
            type: 'one_time' | 'recurring';
            recurring?: Recurring;
        }

        class PricesResource {
            create(params: PriceCreateParams): Promise<Payle.Price>
            retrieve(id: string): Promise<Payle.Price>
        }
    }
}