declare module 'payle' {
  export namespace Payle {
    interface Payment {
      id: string
      object: 'payment'
      amount: number
      amount_received: number
      created: Date
      currency: string
      livemode: boolean
      status:
        | 'pending'
        | 'paid'
        | 'partially_paid'
        | 'failed'
        | 'refunded'
        | 'cancelled'
      type: 'installment' | 'single'
      installments: number | null
      payment_method: 'credit_card' | 'boleto' | 'pix' | 'debit_card'
      hosted_payment_url: string | null
      updated: Date
      charges: Array<Payle.Charge>
    }
  }
}
