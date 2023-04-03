import CryptoCard from './CryptoCard'
import './CryptoCurrencies.sass'
import useFetchCoin from './useFetchCoin'
import { useLazyGetCryptosQuery } from "../../services/cryptoApi";

import axios from 'axios'
import { useState, useEffect, useRef, useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from '../spinner/Spinner'


function CryptoCurrencies() {

  const [coins, setCoins] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const offsetRef = useRef(0)
  // const [getCryptos, results] = useLazyGetCryptosQuery()
  const maxNumberOfCoinsToFetch = 10

  async function fetchMoreData() {
    
    const options = {
      method: 'GET',
      url: 'https://api.coinranking.com/v2/coins',
      params: {
        limit: maxNumberOfCoinsToFetch,
        offset: offsetRef.current
      },
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': import.meta.env.VITE_REACT_ACCESS_TOKEN
      }
    };
    
    const response =  await axios.request(options)
      .then(response => response.data)
      .catch(err => console.log(err))

    offsetRef.current += 10
    setCoins(coins.concat(response.data.coins))
  }

  // useEffect(() => {
  //   if (results && results.data && results.data.data) {
  //     const data = results.data.data
  //     offsetRef.current += 10
  //     setCoins(coins.concat(data.coins))
  //   }
  // }, [results])

  useEffect(() => {
      fetchMoreData()
      // offsetRef.current += 10
      // console.log(offsetRef.current)
  }, [])

  return (
    <InfiniteScroll
      className="crypto"
      dataLength={coins.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {coins.map(coin => (
        <CryptoCard key={coin.uuid} data={coin} onClick={(e) => console.log(e)} />
      ))}
    </InfiniteScroll>
  );
}


export default CryptoCurrencies


