import './common.sass'

function CardHeader( { iconUrl, name, symbol }) {
  return (
    <div className="card__header">
        <img src={iconUrl} alt={name} className="card__icon" />
        <div>
            <p className="card__name">{name}</p>
            <p className="card__symbol">{symbol}</p>
        </div>
  </div>
  )
}

export default CardHeader