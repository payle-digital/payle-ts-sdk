declare module 'payle' {
  namespace Payle {
    export interface ApiList<T> {
      object: 'list';
      data: Array<T>;
      has_more: boolean;
      url: string;
    }

    export interface ApiSearchResult<T> {
      object: 'search_result';
      data: Array<T>;
      has_more: boolean;
      url: string;
      next_page: string | null;
      total_count?: number;
    }
  }
}
