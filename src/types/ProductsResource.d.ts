declare module 'payle' {
    export namespace Payle {
        interface ProductCreateParams {
            name: string;
            description?: string;
        }

        class ProductsResource {
            /**
             * Creates a new product object.
             */
            create(
              params: ProductCreateParams,
            ): Promise<Payle.Product>;
          }
    }
}