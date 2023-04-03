import { millify } from 'millify'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useLazyGetCryptosQuery } from '../../services/cryptoApi'
import CryptoCard from './CryptoCard'
import News from '../News/News'
import LineChart from '../lineChart/LineChart'
import CardHeader from '../common/CardHeader'
import PriceChange from '../common/PriceChange'
import './Home.sass'

function Home() {

  // const { data, isSuccess } = useGetCryptosQuery({ limit: 10, offset: 0})
  const [getCryptos, results] = useLazyGetCryptosQuery()
  const [crypto, setCrypto] = useState({})
  const [cryptosData, setCryptosData] = useState({
    globalStats: null,
    coins: null,
  })

  let globalStats
  let coins

  // if (isSuccess) {
  //   globalStats = data?.data?.stats
  //   coins = data?.data?.coins
  // }

  useEffect(() => {
    if (results && results.data && results.data.data) {
      const data = results.data.data
      setCryptosData({
        globalStats: data.stats,
        coins: data.coins
      })
    }
  }, [results])

  useEffect(() => {
    getCryptos({ limit: 10, offset: 0})
  }, [])
  
  // useEffect(() => {
  //   console.log(coins)
  //   setCrypto(coins?.[0])
  // }, [isSuccess])
  
  return (
    <>
      <section className="global">
        <h2>Global CryptoCurrencies Stats</h2>
        <div className="global__container">
          <CryptoGlobalStat statsTitle="Total Markets" data={cryptosData.globalStats?.totalMarkets} />
          <CryptoGlobalStat statsTitle="Total Currencies" data={cryptosData.globalStats?.total} />
          <CryptoGlobalStat statsTitle="Total Exchanges" data={cryptosData.globalStats?.totalExchanges} />
          <CryptoGlobalStat statsTitle="Total Market Cap" data={cryptosData.globalStats?.totalMarketCap} />
          <CryptoGlobalStat statsTitle="Total 24h Volume" data={cryptosData.globalStats?.total24hVolume} />
        </div>
      </section>
      <section>
        <div className="section__header">
          <h2>Popular CryptoCurrencies</h2>
          <Link to="/cryptocurrencies">show more</Link>
        </div>

        <div className="cryptos">
          <section className="cryptos__line-chart">
            <div className="cryptos__header">
              <CardHeader iconUrl={crypto?.iconUrl} name={crypto?.name} symbol={crypto?.symbol} />
              <div className="flex flex-column align-center ">
                <p className="cryptos__price">${Number(crypto?.price).toFixed(4)}</p>
                <PriceChange change={crypto?.change} />
              </div>
            </div>
            {/* <LineChart crypto={crypto} /> */}
          </section>
          
          <div className="cryptos__crypto">
            {cryptosData.coins?.map(coin => 
              <CryptoCard key={coin.uuid} data={coin} onClick={() => setCrypto(coin)} simplified />
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