import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Sleep = () => {
  const [sleepData, setSleepData] = useState([]);

  // Function to simulate data sync (if needed)
  const syncData = () => {
    // You can implement your data fetching logic here
    setSleepData([
      { day: 'Monday', hours: 7 },
      { day: 'Tuesday', hours: 6 },
      { day: 'Wednesday', hours: 8 },
      { day: 'Thursday', hours: 6 },
      { day: 'Friday', hours: 7.5 },
      { day: 'Saturday', hours: 8 },
      { day: 'Sunday', hours: 7 },
    ]);
  };

  useEffect(() => {
    syncData(); // Sync data when the component mounts
  }, []);

  const data = {
    labels: sleepData.map(point => point.day), // Using the day as labels
    datasets: [
      {
        label: 'Hours of Sleep',
        data: sleepData.map(point => point.hours),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
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
        text: 'Weekly Sleep Data',
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
      <h2 className="text-2xl font-bold mb-4">Sleep Data</h2>
      <div className="w-full h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Sleep;
