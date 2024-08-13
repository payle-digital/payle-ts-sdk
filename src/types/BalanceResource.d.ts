declare module 'payle' {
  export namespace Payle {
    class BalanceResource {
      /**
       * Retrieves the balance associated with the current API key.
       */
      retrieve(): Promise<Payle.Balance>
    }
  }
}
