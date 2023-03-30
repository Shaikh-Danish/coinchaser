import './CryptoCurrencies.sass'
import LineChart from '../lineChart/LineChart'
import CardHeader from '../common/CardHeader'

function CryptoCard({ data, simplified, onClick }) {
    const priceDecimalPrecision = Math.log10(data.price) >= 0 ? 2 : Math.abs(Math.log10(data.price)) + 4

  return (
    <div className="crypto__card">
        <CardHeader iconUrl={data.iconUrl} name={data.name} symbol={data.symbol} />
        <div className="crypto__body flex justify-center align-center gap-05">
            <div>
                <p className={`crypto__change font-bold ${data.change > 0 ? "clr-seaGreen" : "clr-crimsonRed"}`}>{data.change}%</p>
                <p className="crypto__price font-bold">{data.price !== null ? `\$${Number(data.price).toFixed(priceDecimalPrecision)}` : "$--"}</p>
            </div>
            <div className="crypto__line-chart">
                {/* <LineChart crypto={data} /> */}
            </div>
        </div>
    </div>
  )
}

export default CryptoCard