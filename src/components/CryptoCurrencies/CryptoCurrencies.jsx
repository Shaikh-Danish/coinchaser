import { useGetCryptosQuery } from '../../services/cryptoApi'
import CryptoCard from './CryptoCard'
import './CryptoCurrencies.sass'

import { useState, useEffect } from 'react'

function CryptoCurrencies({ simplified }) {
  let limit = 2
  let { data: currencies, isSuccess, isLoading } = useGetCryptosQuery(limit)
  const [coins, setCoins] = useState(currencies?.data?.coins)
  
  
  useEffect(() => {
    if (isSuccess) setCoins(currencies?.data?.coins)
  }, [isSuccess])

  if (isLoading) return <p>loading</p>

  return (
    <div className="crypto">
      {coins?.map(coin => 
        <CryptoCard key={coin.uuid} data={coin} onClick={() => setCrypto(coin)} />
      )}
    </div>
    
  )
}

export default CryptoCurrencies