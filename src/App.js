import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [topData, setTopData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://test.pantausolarpanel.com/api/data");
        const result = await response.json();

        if (result.length > 0) {
          setTopData(result[0]); 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Real-Time Data</h1>
      <Navbar/>
      {topData ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
          {/* Volt Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Volt</h2>
            <p className="text-2xl font-bold text-gray-800 text-center">
              {topData.volt} V
            </p>
          </div>

          {/* Ampere Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Ampere</h2>
            <p className="text-2xl font-bold text-gray-800 text-center">
              {topData.ampere} A
            </p>
          </div>

          {/* Watt Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Watt</h2>
            <p className="text-2xl font-bold text-gray-800 text-center">
              {topData.watt} W
            </p>
          </div>

          {/* Watt-Hours Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Watt-Hours</h2>
            <p className="text-2xl font-bold text-gray-800 text-center">
              {topData.wattHours} Wh
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading data...</p>
      )}
    </div>
  );
};

export default App;
