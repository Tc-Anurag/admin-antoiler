import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { TabProps } from "../../../common/types";

const TabData: React.FC<TabProps> = ({ title, number, growth }) => {
  const formattedNumber = number.toLocaleString();

  // Determine the color class based on growth percentage
  const growthClass = growth > 0 ? (growth < 25 ? 'text-red-500' : 'text-green-500') : 'text-red-500';

  return (
    <div
      className="w-72 bg-white rounded-lg border border-gray-200 p-2"
      style={{ borderRadius: "10px" }}
    >
      <h2 className="text-gray-700 mb-2 text-sm tracking-wider">{title}</h2>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">{formattedNumber}</span>
        <div
          className={`flex items-center ${
            growth > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          <span className="ml-1 text-sm font-semibold">{growth}%</span>
          {growth > 0 ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />}
        </div>
      </div>
    </div>
  );
};

export default TabData;
