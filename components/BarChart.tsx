import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import CustomLegend from "./customLegend";


// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart = () => {
  const [hiddenDatasets, setHiddenDatasets] = useState([false, false, false]);

  const toggleDataset = (index: number) => {
    const updatedHiddenDatasets = [...hiddenDatasets];
    updatedHiddenDatasets[index] = !updatedHiddenDatasets[index];
    setHiddenDatasets(updatedHiddenDatasets);
  };

  const data = {
    labels: ["Diwali", "Birthday", "New Year", "Diwali", "Birthday", "New Year", "Diwali", "Birthday"],
    datasets: [
      {
        label: "Impressions",
        data: [10000, 7500, 5000, 10000, 7500, 5000, 10000, 7500],
        backgroundColor: "#00BCE5",
        borderColor: "#00BCE5",
        borderWidth: 1,
        hidden: hiddenDatasets[0],
      },
      {
        label: "Clicks",
        data: [8000, 6000, 4000, 8000, 6000, 4000, 8000, 6000],
        backgroundColor: "#FFCAEA",
        borderColor: "#FFCAEA",
        borderWidth: 1,
        hidden: hiddenDatasets[1],
      },
      {
        label: "Earnings",
        data: [2000, 1500, 1000, 2000, 1500, 1000, 2000, 1500],
        backgroundColor: "#5182E3",
        borderColor: "#5182E3",
        borderWidth: 1,
        hidden: hiddenDatasets[2],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Posts",
        position: "bottom" as const,
        font: {
          weight: "bold" as const,
          size: 16,
        },
      },
      legend: {
        display: false, // Hide default legend
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "No. of",
          font: {
            weight: "bold" as const,
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div className="flex items-center  w-full h-60 lg:gap-32 md:gap-6">
      {/* Bar Chart */}
      <div className="w-5/6 md:w-4/6 h-full">
        <Bar data={data} options={options} />
      </div>

      {/* Custom Legend (on the right side) */}
      <div className=" flex justify-center pb-11 lg:pb-0">
        <CustomLegend toggleDataset={toggleDataset} />
      </div>
    </div>
  );
};

export default BarChart;
