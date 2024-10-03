import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Steps = () => {
  const [stepsData, setStepsData] = useState([]);

  // Function to simulate data sync (if needed)
  const syncData = () => {
    // You can implement your data fetching logic here
    setStepsData([
      { day: 'Monday', steps: 5000 },
      { day: 'Tuesday', steps: 7000 },
      { day: 'Wednesday', steps: 8000 },
      { day: 'Thursday', steps: 7500 },
      { day: 'Friday', steps: 6000 },
      { day: 'Saturday', steps: 9000 },
      { day: 'Sunday', steps: 10000 },
    ]);
  };

  useEffect(() => {
    syncData(); // Sync data when the component mounts
  }, []);

  const data = {
    labels: stepsData.map(point => point.day), // Using the day as labels
    datasets: [
      {
        label: 'Steps Taken',
        data: stepsData.map(point => point.steps),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(0, 0, 0, 0.7)', // Set this for light mode
        },
      },
      title: {
        display: true,
        text: 'Weekly Steps Data',
        color: 'rgba(0, 0, 0, 0.7)', // Set this for light mode
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Set grid color for light mode
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.7)', // Set tick color for light mode
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Set grid color for light mode
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.7)', // Set tick color for light mode
        },
      },
    },
  };

  // Adjust colors for dark mode
  if (document.documentElement.classList.contains('dark')) {
    options.plugins.legend.labels.color = 'white'; // Legend color for dark mode
    options.plugins.title.color = 'white'; // Title color for dark mode
    options.scales.x.grid.color = 'rgba(255, 255, 255, 0.1)'; // Grid color for dark mode
    options.scales.x.ticks.color = 'white'; // X ticks color for dark mode
    options.scales.y.grid.color = 'rgba(255, 255, 255, 0.1)'; // Grid color for dark mode
    options.scales.y.ticks.color = 'white'; // Y ticks color for dark mode
  }

  return (
    <div className="bg-white/10 dark:bg-white/5 p-4 rounded-lg shadow-lg w-full dark:text-white backdrop-filter backdrop-blur-lg border border-white/20 dark:border-gray-600">
      <h2 className="text-2xl font-bold mb-4">Steps Data</h2>
      <div className="w-full h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Steps;
