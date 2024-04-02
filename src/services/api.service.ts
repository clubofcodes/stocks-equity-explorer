import { BASE_URL } from '@/env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL
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
  tagTypes: ['GET_SEARCHED_STOCK','GET_DAILY_STOCK'],
  refetchOnReconnect: true,
  endpoints: () => ({})
});
