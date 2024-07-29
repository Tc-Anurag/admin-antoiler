import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { TabProps } from '../../../common/types';

const TabData: React.FC<TabProps> = ({ title, number, growth }) => {
  // Format the number with commas
  const formattedNumber = number.toLocaleString();

  // Determine the color class based on growth percentage
  const growthClass = growth > 0 ? (growth < 25 ? 'text-red-500' : 'text-green-500') : 'text-red-500';

  return (
    <div className="p-3 w-full bg-white rounded-lg border border-gray-200 m-4" style={{ borderRadius: '10px' }}>
      <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{formattedNumber}</span>
        <div className={`flex items-center ${growthClass}`}>
          <span>{growth}%</span>
          <span className=' ml-2'>{growth > 0 ? <FaArrowUp /> : <FaArrowDown />}</span>
        </div>
      </div>
    </div>
  );
};

export default TabData;
