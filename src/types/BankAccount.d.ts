declare module 'payle' {
  export namespace Payle {
    interface BankAccount {
      /**
       * The unique identifier of the bank account.
       */
      id: string

      /**
       * The type of object.
       */
      object: 'bank_account'

      /**
       * The name of the account holder.
       */
      account_holder_name: string | null

      /**
       * The account number.
       */
      account_number: string

      /**
       * The country of the bank.
       */
      bank_country: 'BR' | 'US' | 'CL' | 'PE' | 'MX' | 'AR'

      /**
       * The name of the bank.
       */
      bank_name: string

      /**
       * The bank number.
       */
      bank_number: string

      /**
       * The branch code.
       * This field is only applicable to some countries, such as Brazil.
       */
      branch_code: string | null

      /**
       * The currency of the account.
       */
      currency: 'brl' | 'usd' | 'eur' | 'mxn' | 'ars'

      /**
       * The routing number.
       * This field is used in countries such as the United States.
       */
      routing_number?: string

      /**
       * The SWIFT/BIC code.
       * This field is used for international transfers.
       */
      swift_code?: string

      /**
       * The IBAN number.
       * This field is used in countries such as the European Union and other countries.
       */
      iban?: string

      /**
       * The PIX key.
       * This field is only applicable to Brazil.
       */
      pix_key?: string
    }
  }
}
