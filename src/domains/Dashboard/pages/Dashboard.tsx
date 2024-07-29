import React from 'react';
import TabData from '../components/TabData';


const Dashboard: React.FC = () => {
  const data = [
    { title: 'TOTAL ACTIVE ANTOILERS', number: 120, growth: 15 },
    { title: 'TOTAL ACTIVE USERS', number: 75, growth: -5 },
    { title: 'TOTAL CONTACTED ', number: 20000, growth: 30 },
    { title: 'TOTAL HIRED ', number: 20000, growth: 10 },
  ];

  return (
    <div className="flex space-x-4 p-4">
      {data.map((item, index) => (
        <TabData key={index} title={item.title} number={item.number} growth={item.growth} />
      ))}
    </div>
  );
};

export default Dashboard;
