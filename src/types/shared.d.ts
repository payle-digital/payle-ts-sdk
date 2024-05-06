declare module 'payle' {
    namespace Payle {
      interface RangeQueryParam {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
      }

      interface PaginationParams {
        ending_before?: string;
        limit?: number;
        starting_after?: string;
      }
    }
  }
  