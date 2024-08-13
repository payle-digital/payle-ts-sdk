declare module 'payle' {
  export namespace Payle {
    interface Charge {
      id: string
      object: 'charge'
      amount: number
      created: Date
      description: string | null
      due_date: Date
      livemode: boolean
      installment_number: number | null
      net_amount: number
      next_action: any | null
      status: string
      updated: Date
    }
  }
}
