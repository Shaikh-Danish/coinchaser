import React from 'react'
import { millify } from 'millify'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../../services/cryptoApi'
import './Home.sass'

function Home() {

  const { data, isFetching } = useGetCryptosQuery()
  console.log(data, isFetching)
  const globalStats = data?.data?.stats
  console.log(globalStats)
  return (
    <>
      <h1>Global CryptoCurrencies</h1>
      <div className="home-container">
        <div className="home-row">
          <h2>Total CryptoCurrencies</h2>
          <p>{globalStats.total}</p>
        </div>
        <div className="home-row">
          <h2>Total Exchanges</h2>
          <p>{millify(globalStats.totalExchanges)}</p>
        </div>
        <div className="home-row">
          <h2>Total Market Cap</h2>
          <p>{millify(globalStats.totalMarketCap)}</p>
        </div>
        <div className="home-row">
          <h2>Total 24h Volume</h2>
          <p>{millify(globalStats.total24hVolume)}</p>
        </div>
        <div className="home-row">
          <h2>Total Markets</h2>
          <p>{millify(globalStats.totalMarkets)}</p>
        </div>
      </div>
    </>
  )
}

export default Home