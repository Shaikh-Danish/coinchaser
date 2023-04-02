import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '20294ff9b0mshe40f1fe8fb93ae3p1bbfc4jsn562b6d4a365f',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers:  cryptoApiHeaders}) 

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: ({ limit, offset }) => {
        console.log(offset, limit, "get")

        return createRequest(`/coins?limit=${limit}&offset=${offset}`)
      }
    }),
    getCoinHistory: builder.query({
      query: (id) => createRequest(`/coin/${id}/history`)
    }),
  })
})

export const {
  useGetCryptosQuery,
  useGetCoinHistoryQuery,ct
} = cryptoApi