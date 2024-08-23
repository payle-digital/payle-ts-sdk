declare module 'payle' {
    export namespace Payle {
        interface PayoutListParams extends PaginationParams {}

        interface PayoutRetrieveParams {
            expand?: Array<string>
        }

        class PayoutsResource {
            list(params?: PayoutListParams): Promise<Payle.ApiList<Payle.Payout>>
            retrieve(id: string, params?: PayoutRetrieveParams): Promise<Payle.Payout>
        }
    }
}