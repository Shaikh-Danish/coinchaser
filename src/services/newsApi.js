import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "https://cryptonews-api.glitch.me"

const createRequest = (url) => ({ url }) 

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest("/message")
    })
  })
})

export const {
  useGetCryptoNewsQuery,
} = newsApi