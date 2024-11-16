import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement, 
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const App = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Watt',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true, // Fill area under the line
      },
    ],
  });

  const [avgWatt, setAvgWatt] = useState(0);
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  
  useEffect(() => {
    fetch('https://663eff83e3a7c3218a4bce87.mockapi.io/data/v1/data')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const dataItem = data[0]; 

          const labels = dataItem.data.map(item => item.datetime);
          const dataPoints = dataItem.data.map(item => item.watt);
          setAvgWatt(dataItem['avg-watt']);

          setChartData({
            labels: labels,
            datasets: [
              {
                label: 'Watt',
                data: dataPoints,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: true, 
              },
            ],
          });
        } else {
          console.error('No data available');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Datetime',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Watt',
        },
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        top: 0, 
        left: 10,
        right: 10,
        bottom: 0,
      },
    },
  };

  return (
    <div className="App fixed w-full h-full bg-gray-100 pt-14 pb-8"> 
      <Navbar />
      <div className="h-screen w-2/3 bg-white shadow dark:bg-gray-800 p-4 md:p-6 ml-4 mt-2">
        <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label className="block text-gray-700 dark:text-gray-300">Start Date & Time</label>
              <input
                type="datetime-local"
                name="startDateTime"
                value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value)}
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="block text-gray-700 dark:text-gray-300">End Date & Time</label>
              <input
                type="datetime-local"
                name="endDateTime"
                value={endDateTime}
                onChange={(e) => setEndDateTime(e.target.value)}
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white mt-4">${avgWatt.toLocaleString()}</h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Average Watt</p>
          </div>
        </div>

        {/* Chart component */}
        <div id="data-series-chart">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default App;
