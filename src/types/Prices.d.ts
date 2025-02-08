declare module 'payle' {
    export namespace Payle {
        interface DeletedPrice {
            id: string
            object: 'price'
            deleted: true
        }

        interface Price {
            id: string;
            object: string;
            active: boolean;
            currency: string;
            livemode: boolean;
            unit_amount?: number;
            recurring?: Recurring;
            productId: string;
            type: 'one_time' | 'recurring';
            billing_scheme: 'per_unit' | 'tiered';
            tiers?: Tier[];
            custom_unit_amount?: CustomUnitAmount;
            created: Date;
            updated: Date;
            deleted?: Date;
        }

        interface Recurring {
            interval: 'day' | 'week' | 'month' | 'year';
            interval_count: number;
        }

        interface CustomUnitAmount {
            enabled: boolean;
            minimum?: number;
            maximum?: number;
            preset?: number;
        }

        interface Tier {
            up_to: number | 'inf';
            unit_amount: number;
        }
    }
}