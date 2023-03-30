import { millify } from 'millify'

import CardHeader from '../common/CardHeader'
import './Home.sass'

function CryptoCard( { data: {change, iconUrl, name, marketCap, price, rank, symbol}, simplified, onClick }) {
  
  return (
    <div className="crypto__coin" onClick={onClick}>
      <CardHeader iconUrl={iconUrl} name={name} symbol={symbol} />
      <div className="crypto__stats">
        <CardData className="font-bold" label="Price" value={`\$${Number(price).toFixed(2)}`} />
        <div className="crypto__stat">
          <p className="crypto__value">{change}</p>
          <p className="crypto__lable">Change</p>
        </div>
      </div>
    </div>
  )
}


function CardData(props) {
  return (
    <div className="crypto__stat">
      <p className={`crypto__value ${props.className}`}>{props.value}</p>
      <p className="crypto__lable">{props.label}</p>
    </div>
  
  )
}

export default CryptoCard