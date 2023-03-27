import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useGetCoinHistoryQuery } from '../../services/cryptoApi'


import './LineChart.sass'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
  
const options = {
    // responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        },
    },

    scales: {
        x: {
            display: false,
        },
    },

};

function LineChart({ crypto }) {
    
    const { data: d, isSuccess} = useGetCoinHistoryQuery(crypto?.uuid)
    let coinHistory

    if (isSuccess) {
        coinHistory = d?.data?.history
    }

    const labels = coinHistory?.map(history => history.timestamp)

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: coinHistory?.map(history => history.price),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

  return (
    <Line className="line-chart" options={options} data={data}  />
  )
}

export default LineChart