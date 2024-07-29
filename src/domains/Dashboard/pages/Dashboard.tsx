import React from "react";
import TabData from "../components/TabData";
import Button from "../components/Button";
import { FiPlus } from "react-icons/fi";
import UserActivityReport from "../components/UserActivityReport";
import RecentAddedUser from "../components/RecentAddedUser";
import Feedback from "../components/FeedbackCard";

const Dashboard: React.FC = () => {
  const data = [
    { title: "TOTAL ACTIVE ANTOILERS", number: 12426, growth: 15 },
    { title: "TOTAL ACTIVE USERS", number: 238425, growth: -5 },
    { title: "TOTAL CONTACTED ", number: 23400, growth: 10 },
    { title: "TOTAL HIRED ", number: 203420, growth: 10 },
  ];

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <div className="flex justify-end items-center mb-4">
        <Button
          label="Create New Account"
          onClick={handleClick}
          style={{ backgroundColor: "#4F46E5", color: "white" }}
          className="rounded-lg flex p-2 items-center"
          icon={FiPlus}
          iconPosition="left"
        />
      </div>
      <div className="flex space-x-10">
        {data.map((item, index) => (
          <TabData
            key={index}
            title={item.title}
            number={item.number}
            growth={item.growth}
          />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-8">
          <UserActivityReport />
        </div>
        <div className="col-span-4">
          <RecentAddedUser />
        </div>
      </div>

      <div>
        <Feedback/>
      </div>
     
    </>
  );
};

export default Dashboard;
