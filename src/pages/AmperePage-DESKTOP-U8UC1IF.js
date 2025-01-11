import React, { useState } from "react";
import Graph from "../components/Graph";
import DateTimePicker from "../components/DateTimePicker";
import DataList from "../components/DataList";
import Navbar from "../components/Navbar";
import { format } from "date-fns";

const AmperePage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataWithRange = async (start, end) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/api/data-range?start=${start}&end=${end}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from the server.");
      }

      const data = await response.json();

      const formattedData = data.map((item) => ({
        ampere: item.ampere,
        datetime: format(new Date(item.datetime), "yyyy-MM-dd HH:mm:ss"),
      }));

      setFilteredData(formattedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <Navbar />
      <DateTimePicker onFilter={fetchDataWithRange} />
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {filteredData.length > 0 ? (
        <>
          <Graph data={filteredData} type="ampere" />
          <DataList data={filteredData} type="ampere" />
        </>
      ) : (
        !loading && <p>No data available for the selected range.</p>
      )}
    </div>
  );
};

export default AmperePage;
