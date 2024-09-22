declare module 'payle' {
  export namespace Payle {
    interface PaymentCard {
      brand: string
      country: string
      exp_month: number
      exp_year: number
      last4: string
      first6: string
    }

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
      installments: number | null
      payment_method: 'credit_card' | 'boleto' | 'pix' | 'debit_card'
      card: PaymentCard | null
      hosted_payment_url: string | null
      updated: Date
      charges: Array<Payle.Charge>
    }
  }
}
