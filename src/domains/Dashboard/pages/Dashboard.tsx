import React from "react";
import TabData from "../components/TabData";
import Button from "../components/Button";
import { FiPlus } from "react-icons/fi";
import UserActivityReport from "../components/UserActivityReport";
import RecentAddedUser from "../components/RecentAddedUser";
import Feedback from "../components/FeedbackCard";
import { FeedbackItem } from "../../../common/types";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../../services/apiService";

const Dashboard: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["dashboardStatistics"],
    queryFn: () => getData("user/get-dashboard-statistics"),
  });

  // Sample feedback data (ideally should be fetched dynamically)
  const feedbackData: FeedbackItem[] = [
    {
      userName: "John Doe",
      rating: 5,
      date: "2 hours ago",
      feedback: "The service was excellent and very fast.",
      photosLink: "/photos/johndoe",
    },
    {
      userName: "Jane Smith",
      rating: 4,
      date: "1 day ago",
      feedback: "Had a good experience but there were minor issues.",
      photosLink: "/photos/janesmith",
    },
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
          style={{ backgroundColor: "#F15A24", color: "white" }}
          className="rounded-lg flex p-2 items-center"
          icon={FiPlus}
          iconPosition="left"
        />
      </div>
      <div className="flex space-x-10">
        {data?.data?.map((item: any, index: number) => (
          <TabData
            key={index}
            title={item?.title}
            number={item?.number}
            growth={Math.floor(item?.growth)}
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
        <Feedback feedbacks={feedbackData} />
      </div>
    </>
  );
};

export default Dashboard;
