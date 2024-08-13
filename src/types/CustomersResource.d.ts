declare module 'payle' {
  export namespace Payle {
    interface CustomerCreateParams {
      /**
       * The email address of the customer.
       */
      email: string

      /**
       * The name of the customer.
       * This field is optional and can be set to `null` if not provided.
       */
      name?: string | null

      /**
       * The phone number of the customer.
       * This field is optional and can be set to `null` if not provided.
       */
      phone?: string | null

      /**
       * The CPF or CNPJ number of the customer.
       * This field is optional and can be set to `null` if not provided.
       */
      cpf_cnpj?: string | null

      /**
       * Whether WhatsApp notifications are enabled for the customer.
       */
      whatsapp_notification_enabled?: boolean

      /**
       * Whether SMS notifications are enabled for the customer.
       */
      sms_notification_enabled?: boolean

      /**
       * Whether email notifications are enabled for the customer.
       */
      email_notification_enabled?: boolean
    }

    interface CustomerListParams extends PaginationParams {}

    interface CustomerRetrieveParams {
      expand?: Array<string>
    }

    interface CustomerUpdateParams extends CustomerCreateParams {}

    interface CustomerDeleteParams {}

    class CustomersResource {
      /**
       * Creates a new customer object.
       * @param params The parameters to create a new customer.
       * @returns A promise that resolves to the created customer.
       */
      create(params: CustomerCreateParams): Promise<Payle.Customer>

      /**
       * Retrieves an existing customer by its ID.
       * @param id The ID of the customer to retrieve.
       * @param params Optional parameters for retrieving the customer.
       * @returns A promise that resolves to the retrieved customer.
       */
      retrieve(
        id: string,
        params?: CustomerRetrieveParams,
      ): Promise<Payle.Customer>

      /**
       * Updates an existing customer by its ID.
       * @param id The ID of the customer to update.
       * @param params Optional parameters for updating the customer.
       * @returns A promise that resolves to the updated customer.
       */
      update(id: string, params?: CustomerUpdateParams): Promise<Payle.Customer>

      /**
       * Deletes an existing customer by its ID.
       * @param id The ID of the customer to delete.
       * @param params Optional parameters for deleting the customer.
       * @returns A promise that resolves to the deleted customer object.
       */
      delete(
        id: string,
        params?: CustomerDeleteParams,
      ): Promise<Payle.DeletedCustomer>

      /**
       * Returns a list of your customers.
       * The customers are returned sorted by creation date, with the most recent customers appearing first.
       * @param params Optional parameters for listing customers.
       * @returns A promise that resolves to a list of customers.
       */
      list(params?: CustomerListParams): Promise<Payle.ApiList<Payle.Customer>>
    }
  }
}
