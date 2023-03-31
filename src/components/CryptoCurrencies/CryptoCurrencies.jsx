import { useGetCryptosQuery } from '../../services/cryptoApi'
import CryptoCard from './CryptoCard'
import './CryptoCurrencies.sass'

import { useState, useEffect } from 'react'

function CryptoCurrencies({ simplified }) {
  let maxNumberOfCurrenciesToFetch = 10
  let offset = 0
  
  let { data: currencies, isSuccess, isLoading } = useGetCryptosQuery({ 
    limit: maxNumberOfCurrenciesToFetch, 
    offset
  })
  const [coins, setCoins] = useState(currencies?.data?.coins)

  useEffect(() => {
    if (isSuccess) setCoins(currencies?.data?.coins)
  }, [isSuccess])
  
  if (isLoading) return <p>loading</p>

  return (
    <div className="crypto">
      {isSuccess && coins?.map(coin => 
        <CryptoCard key={coin.uuid} data={coin} onClick={(e) => console.log(e)} />
      )}
    </div>
    
  )
}

export default CryptoCurrencies