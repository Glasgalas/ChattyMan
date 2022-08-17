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

// export const authSlice = createSlice({
//   name: 'authUser',
//   initialState: {
//     name: '',
//     email: '',
//     messages: [],
//     isLogged: null,
//     tokken: null,
//   },
//   reducers: {
//     setUser(state, action) {
//       // const { name, value } = action.payload;
//       // state[name] = value;
//       state.isLogged = true;
//     },
//   },
// });

// export const { setUser } = authSlice.actions;
