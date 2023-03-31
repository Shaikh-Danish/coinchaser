import './common.sass'

function PriceChange( { change } ) {
  return (
    <p className={`crypto__change font-bold ${change > 0 ? "clr-seaGreen" : "clr-crimsonRed"}`}>
        {change > 0 ? change : change?.slice(1)}%
    </p>
  )
}

export default PriceChange