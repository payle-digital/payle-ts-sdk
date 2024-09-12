declare module 'payle' {
  export namespace Payle {
    interface Payout {
      /**
       * Unique identifier for the object.
       */
      id: string

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payout'

      /**
       * Amount in cents (decimal) to be transferred to the destination account.
       */
      amount: number

      /**
       * Date when the payout will be available in the destination bank account.
       */
      arrival_date: Date

      /**
       * Date when the payout was created.
       */
      created: Date

      /**
       * Currency of the payout.
       */
      currency: string

      /**
       * Description of the payout.
       */
      description: string | null

      /**
       * The ID of the destination bank account.
       */
      destination: string

      /**
       * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
       */
      livemode: boolean

      /**
       * The status of the payout’s reconciliation.
       */
      reconciliation_status: string

      /**
       * Extra information about a payout that displays on the user’s bank statement.
       */
      statement_descriptor: string | null

      /**
       * Current status of the payout.
       */
      status: string

      /**
       * Type of the payout.
       */
      type: string
    }
  }
}
