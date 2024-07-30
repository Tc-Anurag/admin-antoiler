import React from "react";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import { FeedbackItem } from "../../../common/types";
import { HiDotsHorizontal } from "react-icons/hi";
import RatingStars from "../../../common/Rating/Rating";
// Define the function to handle rating changes

interface FeedbackProps {
  feedbacks: FeedbackItem[];
}

const Feedback: React.FC<FeedbackProps> = ({ feedbacks }) => {
  return (
    <div className="bg-white border rounded-lg  p-6 w-full h-auto mt-8">
      <div className="flex justify-between px-3">
        <span className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Recent Feedback</h2>
          <h3 className="text-gray-500 text-sm ">
            Feedback that need to be approved based on fact
          </h3>
        </span>
        <span>
          <Link
            to={""}
            className="text-blue-600 flex items-center text-sm whitespace-nowrap"
          >
            See All Feedback <FaGreaterThan size={12} className="ml-2" />
          </Link>
        </span>
      </div>
      {feedbacks.map((item, index) => (
        <div key={index} className="border p-7 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <span>
                <RatingStars
                  count={5}
                  value={item.rating}
                  size={21}
                  color2={"#FFA500"} // Color for filled stars
                  edit={false} // Disable editing if only displaying rating
                />
              </span>
            </div>
            <span className="ml-1 font-medium">{item.userName}</span>
          </div>
          <p className="text-gray-500 text-sm">{item.date}</p>
          <div className="flex items-center justify-between ">
            <p className="text-gray-500 my-3">{item.feedback}</p>
            <HiDotsHorizontal size={21} color="#6B7280" />
          </div>
          <Link
            to={""}
            className="text-blue-500 text-sm flex items-center whitespace-nowrap"
          >
            View Photos <FaGreaterThan size={12} className="ml-2" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
