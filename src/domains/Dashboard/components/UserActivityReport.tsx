import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto";
import { FiDownload } from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserActivityReport: React.FC = () => {
  const data = {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    datasets: [
      {
        label: "User Activity",
        data: [
          20000, 25000, 23000, 28000, 45591, 30000, 35000, 37000, 36000, 40000,
          45000, 48000,
        ],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    // responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        grid: {
          display: true, // Show the y-axis grid lines
        },
        ticks: {
          // Customize tick appearance
          padding: 5, // Adjust padding around ticks
        },
        title: {
          display: true,

          font: {
            size: 14, // Adjust font size of title
          },
        },
      },
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className=" bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between mb-4">
        <h2 className="text-left font-semibold">User Activity Report</h2>
        <div>
          <button className="mx-2 px-4 py-2 border border-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 rounded-md text-black font-semibold text-sm">
            12 Months
          </button>
          <button className="mx-2 px-4 py-2 rounded-md text-sm">
            6 Months
          </button>
          <button className="mx-2 px-4 py-2 rounded-md text-sm">30 Days</button>
          <button className="mx-2 px-4 py-2 rounded-md text-sm">7 Days</button>
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center">
          <FiDownload className="mr-2" />
          Export PDF
        </button>
      </div>

      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default UserActivityReport;
