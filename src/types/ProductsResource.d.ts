declare module 'payle' {
    export namespace Payle {
        interface ProductCreateParams {
            active?: boolean;
            name: string;
            description?: string;
            expand?: Array<string>;
            images?: Array<string>;
        }

        interface ProductListParams extends PaginationParams {
          active?: boolean;
          created?: Stripe.RangeQueryParam | number;
          expand?: Array<string>;
          ids?: Array<string>;
          type?: ProductListParams.Type;
          url?: string;
        }

        namespace ProductListParams {
          type Type = 'good' | 'service';
        }

        interface ProductUpdateParams {
          active?: boolean;
          description?: string | null;
          expand?: Array<string>;
          images?: Array<string>;
          name?: string;
        }

        interface ProductRetrieveParams {
          expand?: Array<string>;
        }

        interface ProductDeleteParams {}

        class ProductsResource {
            create(
              params: ProductCreateParams,
            ): Promise<Payle.Product>;

            retrieve(
              id: string,
              params?: ProductRetrieveParams,
            ): Promise<Payle.Product>;

            update(
              id: string,
              params?: ProductUpdateParams,
            ): Promise<Payle.Product>;

            list(
              params?: ProductListParams,
            ): ApiListPromise<Payle.Product>;

            delete(
              id: string,
              params?: ProductDeleteParams,
            ): Promise<Payle.DeletedProduct>;
          }
    }
}