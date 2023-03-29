import React from 'react'
import { millify } from 'millify'

function CryptoCard( { data: {change, iconUrl, name, marketCap, price, rank, symbol}, simplified, onClick }) {
  
  return (
    <div className="crypto__card" onClick={onClick}>
      <div className="crypto__header">
        <img src={iconUrl} alt={name} className="crypto__icon" />
        <div>
          <p className="crypto__name">{name}</p>
          <p className="crypto__symbol">{symbol}</p>
        </div>
      </div>
      <div className="crypto__stats">
        <CardData className="clr-primary font-bold" label="Price" value={`\$${Number(price).toFixed(2)}`} />
        <div className="crypto__stat">
          <p className="crypto__value">{change}</p>
          <p className="crypto__lable">Change</p>
        </div>
        {!simplified && <CardData label="Market Cap" value={millify(marketCap)} />}
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