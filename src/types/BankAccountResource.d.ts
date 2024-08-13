declare module 'payle' {
  export namespace Payle {
    class BankAccountResource {
      /**
       * Retrieves the bank account associated with the current API key.
       */
      retrieve(): Promise<Payle.BankAccount>
    }
  }
}
