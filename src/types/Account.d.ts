declare module 'payle' {
  export namespace Payle {
    interface Account {
      id: string
      object: 'account'
      account_type: string
      avatar_url: string | null
      cellphone: string
      country: 'BR' | 'US' | 'CL' | 'PE' | 'MX' | 'AR'
      currency: 'brl' | 'usd' | 'eur' | 'mxn' | 'ars'
      cpf_cnpj: string
      created: Date
      name: string
      updated: Date
    }

    interface AccountFees {
      payment: {
        bank_slip: {
          fixed_value: number
          percentage: number
          days_to_receive: number
        }
        credit_card: {
          fixed_value: number
          one_installment_percentage: number
          up_to_six_installments_percentage: number
          up_to_twelve_installments_percentage: number
          days_to_receive: number
        }
        debit_card: {
          fixed_value: number
          percentage: number
          days_to_receive: number
        }
        pix: {
          fixed_value: number
          days_to_receive: number
          percentage: number
        }
      }
      notification: {
        email: {
          fixed_value: number
        }
        whats_app: {
          fixed_value: number
        }
        sms: {
          fixed_value: number
        }
      },
      payout: {
        fixed_value: number,
        percentage: number,
        days_to_receive: number,
      },
    }

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
