import { millify } from 'millify'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useGetCryptosQuery } from '../../services/cryptoApi'
import CryptoCard from '../CryptoCurrencies/CryptoCard'
import News from '../News/News'
import LineChart from '../lineChart/LineChart'
import './Home.sass'

function Home() {

  const { data, isSuccess } = useGetCryptosQuery(10)
  const [crypto, setCrypto] = useState({})

  let globalStats
  let coins

  if (isSuccess) {
    globalStats = data?.data?.stats
    coins = data?.data?.coins
  }

  useEffect(() => {
    setCrypto(coins?.[0])
  }, [isSuccess])
  
  return (
    <>
      <section className="global">
        <h2>Global CryptoCurrencies Stats</h2>
        <div className="global__container">
          <CryptoGlobalStat statsTitle="Total Markets" data={globalStats?.totalMarkets} />
          <CryptoGlobalStat statsTitle="Total Currencies" data={globalStats?.total} />
          <CryptoGlobalStat statsTitle="Total Exchanges" data={globalStats?.totalExchanges} />
          <CryptoGlobalStat statsTitle="Total Market Cap" data={globalStats?.totalMarketCap} />
          <CryptoGlobalStat statsTitle="Total 24h Volume" data={globalStats?.total24hVolume} />
        </div>
      </section>
      <section>
        <div className="section__header">
          <h2>Popular CryptoCurrencies</h2>
          <Link to="/cryptocurrencies">show more</Link>
        </div>

        <div className="cryptos">
          <section className="cryptos__line-chart">
            <LineChart crypto={crypto} />
          </section>
          
          <div className="cryptos__crypto">
          {coins?.map(coin => 
            <CryptoCard key={coin.uuid} data={coin} simplified />
          )}
          </div>
        </div>

        
      </section>
      <section>
        <div className="section__header">
          <h2>Trending News</h2>
          <Link to="/news">show more</Link>
        </div>

        <News simplified />
      </section>
    </>
  )
}


function CryptoGlobalStat(props) {
  return (
    <div className="global__card">
      <h3>{props.statsTitle}</h3>
      <p>{millify(Number(props.data))}</p>
    </div>
  )
}

export default Home