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
    // maintainAspectRatio: false,

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
        y: {
            display: false,
        },
    },
    elements: {
        line: {
          tension: 0.4 // controls the curvature of the line
        },
        point:{
            radius: 2.5
        }
    },

};

function LineChart({ crypto }) {
    const { data: history, isSuccess } = useGetCoinHistoryQuery(crypto?.uuid)
    let coinHistory;
    
    if (isSuccess) {
        // const isHistoryValid = history && history.data && history.data.history;
        // const historyLength = isHistoryValid ? history.data.history.length : 0;
        // const coinHistory = isHistoryValid ? history.data.history.slice(historyLength - 50) : [];

        let len = history?.data?.history.length
        coinHistory = history?.data?.history.slice(0, 50).reverse()
    }

    const labels = coinHistory?.map(history => getFormattedTime(history.timestamp))

    const data = {
        labels,
        datasets: [
            {
                label: `${crypto?.name} price `,
                data: coinHistory?.map(history => history.price),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                cubicInterpolationMode: "monotone"
            },
        ],
    };

  return (
     <Line className="line-chart" options={options} data={data} />
  )
}


function getFormattedTime(timeInMs) {
    const date = new Date(timeInMs * 1000); // Convert seconds to milliseconds

    const hours = date.getHours() % 12; // Get the 12-hour format hour
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Pad minutes with leading zero if needed
    const meridiem = date.getHours() >= 12 ? 'PM' : 'AM'; // Determine whether it's AM or PM

    return `${hours}:${minutes} ${meridiem}`;
}

export default LineChart