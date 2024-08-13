declare module 'payle' {
  namespace Payle {
    export interface ApiList<T> {
      object: 'list';
      url: string;
      has_more: boolean;
      data: Array<T>;
    }

    export interface ApiSearchResult<T> {
      object: 'search_result';
      data: Array<T>;
      has_more: boolean;
      url: string;
      next_page: string | null;
      total_count?: number;
    }

    export interface PayleConfig {
      /**
       * Specify the host to use for API Requests.
      */
      baseURL?: string;
    }
  }
}
