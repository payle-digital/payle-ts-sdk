declare module 'payle' {
  export namespace Payle {
    type ValidPayoutRelations = 'bank_account' | 'account'

    interface PayoutListParams extends PaginationParams {
      relations?: ValidPayoutRelations[]
    }

    interface PayoutRetrieveParams {
      relations?: ValidPayoutRelations[]
    }

    class PayoutsResource {
      list(params?: PayoutListParams): Promise<Payle.ApiList<Payle.Payout>>
      retrieve(id: string, params?: PayoutRetrieveParams): Promise<Payle.Payout>
    }
  }
}
