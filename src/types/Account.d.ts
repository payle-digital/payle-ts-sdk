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
        whatsApp: {
          fixed_value: number
        }
        sms: {
          fixed_value: number
        }
      }
    }
  }
}
