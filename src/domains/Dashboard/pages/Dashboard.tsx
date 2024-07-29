import React from 'react';
import TabData from '../components/TabData';
import Feedback from '../components/FeedbackCard';


const Dashboard: React.FC = () => {
  const data = [
    { title: 'TOTAL ACTIVE ANTOILERS', number: 120, growth: 15 },
    { title: 'TOTAL ACTIVE USERS', number: 75, growth: -5 },
    { title: 'TOTAL CONTACTED ', number: 20000, growth: 30 },
    { title: 'TOTAL HIRED ', number: 20000, growth: 10 },
  ];

  const feedbacks = [
    {
      userName: 'John Doe',
      rating: 5,
      date: 'Jan 17, 2022, 4:45PM',
      feedback: 'The service was excellent and very fast.',
      photosLink: '#'
    },
    {
      userName: 'Jane Smith',
      rating: 4,
      date: 'Jan 17, 2022, 4:45PM',
      feedback: 'Had a good experience but there were minor issues.',
      photosLink: '#'
    },
    // Add more feedback items as needed
  ];
  

  return (
    <div className="p-4">
    <div className="flex ">
      {data.map((item, index) => (
        <TabData key={index} title={item.title} number={item.number} growth={item.growth} />
      ))}
    </div>
    <div className="p-4">

      <Feedback feedbacks={feedbacks} />
    </div>
   </div>
  );
};

export default Dashboard;
