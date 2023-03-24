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
import { useGetCryptosQuery } from '../../services/cryptoApi'


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
    responsive: true,
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

function LineChart(props) {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    console.log(props.coinId)

    const data = {
        labels,
        datasets: [
        {
            label: 'Dataset 1',
            data: [100, 19, 122, 109, 291, 48],
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