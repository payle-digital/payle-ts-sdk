declare module 'payle' {
  export namespace Payle {
    interface ProductCreateParams {
      name: string
      description?: string
      active?: boolean
      prices?: Array<Omit<PriceCreateParams, 'product_id'>>
      expand?: Array<string>
      images?: Array<string>
    }

    interface ProductListParams extends PaginationParams {
      active?: boolean
      created?: Payle.RangeQueryParam | number
      expand?: Array<string>
      ids?: Array<string>
    }

    interface ProductUpdateParams {
      active?: boolean
      description?: string | null
      expand?: Array<string>
      images?: Array<string>
      name?: string
    }

    interface ProductRetrieveParams {
      expand?: Array<string>
    }

    interface ProductDeleteParams {}

    class ProductsResource {
      create(params: ProductCreateParams): Promise<Payle.Product>

      retrieve(
        id: string,
        params?: ProductRetrieveParams,
      ): Promise<Payle.Product>

      update(id: string, params?: ProductUpdateParams): Promise<Payle.Product>

      list(params?: ProductListParams): Promise<Payle.ApiList<Payle.Product>>

      delete(
        id: string,
        params?: ProductDeleteParams,
      ): Promise<Payle.DeletedProduct>
    }
  }
}
