import React, { useState } from "react";

const DateTimePicker = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const formattedStart = start.toISOString();
      const formattedEnd = end.toISOString();

      onFilter(formattedStart, formattedEnd);
      console.log("Formatted Start:", formattedStart);
      console.log("Formatted End:", formattedEnd);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mt-16">
      <div className="flex flex-col w-1/3">
        <label className="text-sm font-medium text-gray-600 mb-1" htmlFor="startDate">
          Start Date
        </label>
        <input
          id="startDate"
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>

      <div className="flex flex-col w-1/3">
        <label className="text-sm font-medium text-gray-600 mb-1" htmlFor="endDate">
          End Date
        </label>
        <input
          id="endDate"
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>

      <button
        onClick={handleFilter}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-1/3"
      >
        Search
      </button>
    </div>
  );
};

export default DateTimePicker;
