declare module 'payle' {
  namespace Payle {
    export interface ApiList<T> {
      object: 'list';
      data: Array<T>;
      has_more: boolean;
      url: string;
    }

    export interface ApiListPromise<T>
      extends Promise<Response<ApiList<T>>>,
        AsyncIterableIterator<T> {
      autoPagingEach(
        handler: (item: T) => boolean | void | Promise<boolean | void>,
        onDone?: (err: any) => void
      ): Promise<void>;

      autoPagingToArray(
        opts: {limit: number},
        onDone?: (err: any) => void
      ): Promise<Array<T>>;
    }

    export interface ApiSearchResult<T> {
      object: 'search_result';
      data: Array<T>;
      has_more: boolean;
      url: string;
      next_page: string | null;
      total_count?: number;
    }

    export interface ApiSearchResultPromise<T>
      extends Promise<Response<ApiSearchResult<T>>>,
        AsyncIterableIterator<T> {
      autoPagingEach(
        handler: (item: T) => boolean | void | Promise<boolean | void>
      ): Promise<void>;

      autoPagingToArray(opts: {limit: number}): Promise<Array<T>>;
    }
  }
}
