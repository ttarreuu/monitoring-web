import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ data, type }) => {
  const labels = data.map((item) => item.datetime);
  const chartData = data.map((item) => item[type]);

  const graphColor = {
    watt: "rgba(255, 99, 132, 0.5)", // Red
    volt: "rgba(54, 162, 235, 0.5)", // Blue
    ampere: "rgba(75, 192, 192, 0.5)", // Green
  }[type];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      //title: {
        //display: true,
        //text: `${type.charAt(0).toUpperCase() + type.slice(1)} Graph`,
      //},
    },
  };

  const chartDataConfig = {
    labels,
    datasets: [
      {
        label: `${type.charAt(0).toUpperCase() + type.slice(1)}`,
        data: chartData,
        borderColor: graphColor,
        backgroundColor: graphColor,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
      <h2 className="text-lg font-bold text-gray-700 text-center mb-4 capitalize">
        {type} Graph
      </h2>
      <Line data={chartDataConfig} options={chartOptions} />
    </div>
  );
};

export default Graph;
