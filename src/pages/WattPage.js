import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
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

const WattPage = () => {
  const [avgWatt, setAvgWatt] = useState(0);
  const [dataList, setDataList] = useState([]); // Menyimpan data dari API
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: 'Watt',
        data: [],
        backgroundColor: "#03045E",
        borderColor: "#0077B6",
        borderWidth: 1,
        fill: true,
      },
    ],
  });
  
  const getData = async () => {
    try {
      const response = await fetch('http://test.pantausolarpanel.com/api/data', {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const dataItem = data[0]; 

          const labels = dataItem.data.map(item => item.datetime);
          const dataPoints = dataItem.data.map(item => item.watt);
          setAvgWatt(dataItem['avg-watt']); 
          
          // Menyimpan data untuk ditampilkan dalam daftar
          setDataList(dataItem.data);

          setChartData({
            labels: labels,
            datasets: [
              {
                label: 'Watt',
                data: dataPoints,
                backgroundColor: '#03045E',
                borderColor: '#0077B6',
                borderWidth: 1,
                fill: true, 
              },
            ],
          });
        } else {
          console.error('No data available');
        }
      })
      
    } catch (err) {
      console.log(err);
    }
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date & Time",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Watt",
        },
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="fixed h-full w-full bg-gray-100 pt-14">
      <Navbar/>
      <div className="h-min bg-white m-4 p-4 rounded-xl">
        <div className="flex space-x-4">
          <div className="flex flex-col w-1/2">
            <label className="block text-black"> Start Date & Time</label>
            <input
              type="datetime-local"
              className="border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="block text-black"> End Date & Time</label>
            <input
              type="datetime-local"
              className="border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="h-min w-7/12 mx-4 p-2 bg-white rounded-xl">
          <Line data={chartData} options={options} />
        </div>
        <div className="w-5/12 mx-4 p-4 bg-white rounded-xl">
          <ul>
            {dataList.length > 0 ? (
              dataList.map((item, index) => (
                <li key={index} className="border-b border-gray-200 py-2">
                  <strong>Datetime:</strong> {item.datetime} <br />
                  <strong>Watt:</strong> {item.watt}
                </li>
              ))
            ) : (
              <li>No data available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WattPage;
