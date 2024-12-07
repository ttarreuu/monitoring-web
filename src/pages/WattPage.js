import React, { useState, useEffect } from "react";
import Graph from "../components/Graph";
import DateTimePicker from "../components/DateTimePicker";
import DataList from "../components/DataList";
import Navbar from "../components/Navbar";

const WattPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetch("https://663eff83e3a7c3218a4bce87.mockapi.io/data/v1/data", {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => setOriginalData(json[0].data));
  }, []);

  const filterData = (start, end) => {
    const filtered = originalData.filter((item) => {
      const date = new Date(item.datetime);
      return date >= start && date <= end;
    });
    console.log(filtered)
    setFilteredData(filtered);
  };

  return (
    <div className="p-4">
      <Navbar/>
      <DateTimePicker onFilter={filterData} />
      <Graph data={filteredData} type="Watt" />
      <DataList data={filteredData} type="Watt" />
    </div>
  );
};

export default WattPage;
