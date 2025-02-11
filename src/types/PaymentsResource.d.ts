declare module 'payle' {
  export namespace Payle {
    interface PaymentCreateParams {
      /**
       * The ID of the customer making the payment.
       */
      customer: string

      /**
       * The total amount to be charged, in the smallest currency unit (e.g., cents for USD).
       */
      amount: number

      /**
       * The three-letter ISO currency code, e.g., 'USD', 'EUR', 'BRL'.
       */
      currency: Payle.Currency

      /**
       * The number of installments for the payment.
       * This field is required only when `type` is 'installment'.
       * Set to `null` if no installments.
       */
      installments?: number | null // only for type=installment

      /**
       * The payment method to be used for the transaction.
       * This should be an object containing the details of the payment method.
       */
      payment_method: Payle.PaymentMethod

      /**
       * The due date for the payment.
       * This should be a valid date object indicating when the payment is due.
       */
      due_date: Date

      /*
       * The card details for the payment.
       * This should be an object containing the details of the card.
       */
      card?: {
        country: string
        exp_month: string
        exp_year: string
        cvv: string
        card_number: string
      }

      /**
       * The card holder information for the payment.
       * This should be an object containing the card holder information.
       */
      card_holder_info?: {
        name: string
        cpf_cnpj: string
        postal_code: string
      }
    }

    interface PaymentListParams extends PaginationParams {}

    interface PaymentRetrieveParams {
      expand?: Array<string>
    }

    class PaymentsResource {
      /**
       * Creates a new payment with the given parameters.
       * @param params The parameters to create a new payment.
       * @returns A promise that resolves to the created payment.
       */
      create(params: PaymentCreateParams): Promise<Payle.Payment>

      /**
       * Retrieves an existing payment by its ID.
       * @param id The ID of the payment to retrieve.
       * @param params Optional parameters for retrieving the payment.
       * @returns A promise that resolves to the retrieved payment.
       */
      retrieve(
        id: string,
        params?: PaymentRetrieveParams,
      ): Promise<Payle.Payment>

      /**
       * Lists all payments with optional pagination parameters.
       * @param params Optional parameters for listing payments.
       * @returns A promise that resolves to a list of payments.
       */
      list(params?: PaymentListParams): Promise<Payle.ApiList<Payle.Payment>>
    }
  }
}
