import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://www.alphavantage.co/query'
  // prepareHeaders: (headers, { getState }) => {
  //   // Add auth mechanism to pass tokens to the header
  //   const token = (getState as unknown as RootState)?.app?.auth?.token;
  //   if (token?.access) {
  //     headers.set('Authorization', `Bearer ${token.access}`);
  //   } else {
  //     headers.delete('Authorization');
  //   }
  //   return headers;
  // }
});

export const apiService = createApi({
  baseQuery,
  tagTypes: ['GET_SEARCHED_STOCK'],
  refetchOnReconnect: true,
  endpoints: () => ({})
});
