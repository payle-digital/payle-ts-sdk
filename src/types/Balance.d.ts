declare module 'payle' {
  export namespace Payle {
    interface Balance {
      /**
       * Available balance.
       */
      available: number

      /**
       * Pending balance.
       */
      pending: number

      /**
       * Whether the balance is live or test.
       */
      livemode: boolean

      /**
       * The currency of the balance.
       */
      currency: string
    }
  }
}
