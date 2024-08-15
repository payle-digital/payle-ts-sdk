declare module 'payle' {
  export namespace Payle {
    class AccountResource {
      /**
       * Retrieves the account object associated with the current API key.
       */
      retrieve(): Promise<Payle.Account>

      /**
       * Retrieves the fees associated with the current API key.
       */
      retrieveFees(): Promise<Payle.AccountFees>

      /**
       * Retrieves the balance associated with the current API key.
       */
      retrieveBalance(): Promise<Payle.Balance>

      /**
       * Retrieves the bank account associated with the current API key.
       */
      retrieveBankAccount(): Promise<Payle.BankAccount>
    }
  }
}
