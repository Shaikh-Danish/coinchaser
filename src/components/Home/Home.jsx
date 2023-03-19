import { millify } from 'millify'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../../services/cryptoApi'
import CryptoCurrencies from '../CryptoCurrencies/CryptoCurrencies'
import './Home.sass'

function Home() {

  let { data: globalStats, isSuccess } = useGetCryptosQuery()
  console.log(globalStats)
  
  if (isSuccess) {globalStats = globalStats?.data?.stats}

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
        <div>
          <h2>Popular CryptoCurrencies</h2>
          <Link to="/cryptocurrencies">show more</Link>
        </div>

        <CryptoCurrencies simplified />
      </section>
    </>
  )
}


function CryptoGlobalStat(props) {
  return (
    <div className="global__card">
      <h3>{props.statsTitle}</h3>
      <p>{millify(props.data)}</p>
    </div>
  )
}

export default Home