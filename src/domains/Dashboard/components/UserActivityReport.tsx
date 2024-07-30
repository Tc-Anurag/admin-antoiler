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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
        borderColor: "#F15A24",
        backgroundColor: "rgba(238, 242, 255, 0.5)",
        tension: 0.8,
        pointRadius: 5,
        pointBorderWidth: 2,
        pointBorderColor: "white",
        pointBackgroundColor: "#F15A24",
      },
      {
        label: "User Activity B",
        data: [
          15000, 20000, 18000, 23000, 40000, 28000, 32000, 34000, 33000, 37000,
          42000, 46000,
        ],
        fill: true,
        borderColor: "#F15A24",
        backgroundColor: "rgba(241, 90, 36, 0.2)",
        tension: 0.8,
        pointRadius: 5,
        pointBorderWidth: 2,
        pointBorderColor: "white",
        pointBackgroundColor: "#F15A24",
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          borderColor: "#e5e7eb",
        },
        ticks: {
          display: false,
          count: 5, // This will create 4 spaces, resulting in 4 lines
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "white", // Sets the background color of the tooltip
        titleColor: "black", // Optional: Sets the color of the tooltip title
        bodyColor: "black", // Optional: Sets the color of the tooltip body
        borderColor: "#E4E4E7", // Optional: Sets the border color of the tooltip
        borderWidth: 1, // Optional: Sets the border width of the tooltip
        callbacks: {
          label: (tooltipItem: any) =>
            `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
        },
      },
      filler: {
        propagate: true,
      },
    },
  };

  return (
    <div className="bg-white pl-8 pr-2 py-4 rounded-lg border border-gray-200">
      <div className="flex justify-start items-center space-x-4 mb-4">
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
      </div>

      <div className="w-full h-60">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default UserActivityReport;
