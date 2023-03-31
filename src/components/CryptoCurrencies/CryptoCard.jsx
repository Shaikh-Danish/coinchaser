import { useState, useEffect } from 'react'

import './CryptoCurrencies.sass'
import LineChart from '../lineChart/LineChart'
import CardHeader from '../common/CardHeader'
import PriceChange from '../common/PriceChange'

function CryptoCard({ data, onClick }) {
    const logPrice = Math.log10(data.price);
    const priceDecimalPrecision = logPrice >= 0 ? 2 : Math.abs(logPrice) + 4;
    const isPriceNull = data.price === null
  
    const [showLineChart, setShowLineChart] = useState(false);
    
    //delay to prevent overloading the server when fetching data.
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowLineChart(true);
      }, 200);
  
      return () => clearTimeout(timeoutId);
    }, []);
  
    return (
      <div className="crypto__card" onClick={onClick}>
        <CardHeader iconUrl={data.iconUrl} name={data.name} symbol={data.symbol} />
        <div className="crypto__body flex justify-center align-center gap-05">
          <div>
            <PriceChange change={data.change} />
            <p className="crypto__price font-bold">
              ${isPriceNull ? "--" : `${Number(data.price).toFixed(priceDecimalPrecision)}`}
            </p>
          </div>
          <div className="crypto__line-chart">
            {/* {showLineChart && <LineChart crypto={data} />} */}
          </div>
        </div>
      </div>
    );
  }
  

export default CryptoCard