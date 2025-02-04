    // components/BarChart.tsx
    import { Bar } from "react-chartjs-2";
    import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    } from "chart.js";

    // Register Chart.js components
    ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    );

    const BarChart = () => {
    const data = {
      labels: [
        "Diwali",
        "Birthday",
        "New Year",
        "Diwali",
        "Birthday",
        "New Year",
        "Diwali",
        "Birthday",
      ],
      datasets: [
        {
          label: "Impressions",
          data: [10000, 7500, 5000, 10000, 7500, 5000, 10000, 7500],
          backgroundColor: "#00BCE5",
          borderColor: "#00BCE5",
          borderWidth: 1,
        },
        {
          label: "Clicks",
          data: [8000, 6000, 4000, 8000, 6000, 4000, 8000, 6000],
          backgroundColor: "#FFCAEA",
          borderColor: "#FFCAEA",
          borderWidth: 1,
        },
        {
          label: "Earnings",
          data: [2000, 1500, 1000, 2000, 1500, 1000, 2000, 1500],
          backgroundColor: "#5182E3",
          borderColor: "#5182E3",
          borderWidth: 1,
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
          position: "right" as const, // Correct way to assign "right"
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
        <div className="h-96 w-full">
        <Bar data={data} options={options} />
        </div>
    );
    };

    export default BarChart;
