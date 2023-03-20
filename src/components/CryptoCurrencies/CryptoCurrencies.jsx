import { useGetCryptosQuery } from '../../services/cryptoApi'
import CryptoCard from './CryptoCard'
import './CryptoCurrencies.sass'

import { useState, useEffect } from 'react'

function CryptoCurrencies({ simplified }) {
  let limit = simplified ? 10 : 100
  let { data: currencies, isSuccess } = useGetCryptosQuery(limit)
  const [coins, setCoins] = useState(currencies?.data?.coins)
  
  useEffect(() => {
    if (isSuccess) setCoins(currencies?.data?.coins)
  }, [isSuccess])
  // if (isSuccess) setCoins(currencies?.data?.coins)

  console.log(coins)

  return (
    <div className="crypto">
      {coins?.map(coin => {
        console.log(coin.name)
        return <CryptoCard key={coin.uuid} data={coin} />
      }
      )}
    </div>
    
  )
}

export default CryptoCurrencies