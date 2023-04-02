import CryptoCard from './CryptoCard'
import './CryptoCurrencies.sass'
import useFetchCoin from './useFetchCoin'
import { useGetCryptosQuery } from "../../services/cryptoApi";

import axios from 'axios'
import { useState, useEffect, useRef, useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'


function CryptoCurrencies() {

  const [coins, setCoins] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const offsetRef = useRef(0)
  const maxNumberOfCoinsToFetch = 10

  async function fetchMoreData() {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        limit: maxNumberOfCoinsToFetch,
        offset: offsetRef.current
      },
      headers: {
        'X-RapidAPI-Key': '20294ff9b0mshe40f1fe8fb93ae3p1bbfc4jsn562b6d4a365f',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
    
    const response =  await axios.request(options).then(response => response.data)
    offsetRef.current += 10
    setCoins(coins.concat(response.data.coins))
  }

  useEffect(() => {
      fetchMoreData()
  }, [])

  return (
    <InfiniteScroll
      className="crypto"
      dataLength={coins.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
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


