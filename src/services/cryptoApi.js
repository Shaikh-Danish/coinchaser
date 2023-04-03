import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'Content-Type': 'application/json',
  'x-access-token': import.meta.env.VITE_REACT_ACCESS_TOKEN
}

const baseUrl = 'https://api.coinranking.com/v2'

const createRequest = (url) => ({ url, headers:  cryptoApiHeaders}) 

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: ({ limit, offset }) => createRequest(`/coins?limit=${limit}&offset=${offset}`)
    }),
    getCoinHistory: builder.query({
      query: (id) => createRequest(`/coin/${id}/history`)
    }),
  })
})

export const {
  useLazyGetCryptosQuery,
  useGetCoinHistoryQuery,ct
} = cryptoApi