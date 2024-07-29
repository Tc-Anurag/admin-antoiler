import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { TabProps } from '../../../common/types';

const TabData: React.FC<TabProps> = ({ title, number, growth }) => {
  // Format the number with commas
  const formattedNumber = number.toLocaleString();

  return (
    <div className="p-2 w-72  bg-white rounded-lg border border-gray-200  m-4" style={{ borderRadius: '10px' }}>
      <h2 className="text-gray-700 mb-2">{title}</h2>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">{formattedNumber}</span>
        <div className={`flex items-center ${growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
          <span className="ml-1">{growth}%</span>
          {growth > 0 ? <FaArrowUp /> : <FaArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default TabData;
