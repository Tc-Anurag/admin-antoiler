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
        label: "User Activity A",
        data: [
          20000, 25000, 23000, 28000, 45591, 30000, 35000, 37000, 36000, 40000,
          45000, 48000,
        ],
        fill: true,
        borderColor: "#4F46E5",
        backgroundColor: "rgba(72, 85, 99, 0.2)", // Updated for better visibility
        tension: 0.8,
        pointRadius: 0,
      },
      {
        label: "User Activity B",
        data: [
          15000, 20000, 18000, 23000, 40000, 28000, 32000, 34000, 33000, 37000,
          42000, 46000,
        ],
        fill: true,
        borderColor: "#818CF8",
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Updated for better visibility
        tension: 0.8,
        pointRadius: 0,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false, // Allow height adjustment
    scales: {
      x: {
        grid: {
          display: false, // Hide horizontal grid lines
        },
      },
      y: {
        grid: {
          display: true, // Show vertical grid lines
          borderColor: "#e5e7eb", // Optional: change border color
        },
        ticks: {
          display: true, // Show vertical axis labels
          stepSize: 10000, // Adjust step size to create approximately 4 lines
          // Optional: set min and max for better control
          // min: 0, // You can set min if necessary
          // max: 50000, // Set max according to your data range
        },
        border: {
          display: false, // Hide the y-axis border line
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Set to true to show legend
        position: "top",
      },
      tooltip: {
        enabled: false, // Disable tooltips completely
        // Alternatively, if you want to customize or selectively show tooltips:
        // callbacks: {
        //   label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        // },
      },
    },
  };

  return (
    <div className="bg-white pl-8 pr-2 py-4 rounded-lg border border-gray-200">
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

      <div className="w-full h-60">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default UserActivityReport;
