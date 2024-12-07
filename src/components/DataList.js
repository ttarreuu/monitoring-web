import React, { useState } from "react";

const DataList = ({ type, data }) => {
    return (
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-gray-700 text-center mb-4">Data List</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
            <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Datetime</th>
                <th className="border border-gray-300 px-4 py-2 text-left">{type}</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.datetime}</td>
                <td className="border border-gray-300 px-4 py-2">{item.volt}</td>
                <td className="border border-gray-300 px-4 py-2">{item.watt}</td>
                <td className="border border-gray-300 px-4 py-2">{item.ampere}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default DataList;
