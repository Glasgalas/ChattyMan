import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chuckApi = createApi({
  reducerPath: 'chuck',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chucknorris.io/jokes',
  }),
  tagTypes: ['ChuckResponse'],
  endpoints: builder => ({
    getResponse: builder.query({
      query: () => ({
        url: `/random`,
      }),
      providesTags: ['ChuckResponse'],
    }),
  }),
});

export const { useGetResponseQuery } = chuckApi;
