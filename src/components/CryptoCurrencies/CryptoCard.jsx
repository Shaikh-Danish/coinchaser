import './CryptoCurrencies.sass'
import LineChart from '../lineChart/LineChart'

function CryptoCard({ data, simplified, onClick }) {
    console.log(data.change > 0)
  return (
    <div className="crypto__card">
        <div className="crypto__header">
                <img src={data.iconUrl} alt={data.name} className="crypto__icon" />
            <div>
                <p className="crypto__name">{data.name}</p>
                <p className="crypto__symbol">{data.symbol}</p>
            </div>
        </div>
        <div className="crypto__body flex justify-center align-center gap-05">
            <div>
                <p className={`crypto__change font-bold ${data.change > 0 ? "clr-seaGreen" : "clr-crimsonRed"}`}>{data.change}%</p>
                <p className="crypto__price font-bold">${Number(data.price).toFixed()}</p>
            </div>
            <div className="crypto__line-chart">
                <LineChart crypto={data} />
            </div>
        </div>
    </div>
  )
}

export default CryptoCard