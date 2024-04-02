import { apiService } from '@services/api.service.ts';

const stocks = apiService.injectEndpoints({
  endpoints: build => ({
    getStocks: build.query<any[], string>({
      query: name => {
        return { url: `/users/${name}/repos`, method: 'GET' };
      },
      providesTags: [{ type: 'GET_SEARCHED_STOCK' }],
      transformResponse: (response, meta): any => {
        if (meta?.response?.ok) {
          return response;
        }
      }
    })
  })
});

export const { useGetStocksQuery } = stocks;
