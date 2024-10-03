import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import mockData from '../mockData';

const HeartRateChart = () => {
  const [heartRateData, setHeartRateData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const syncData = () => {
    // Simulate fetching data from devices
    if (mockData && mockData.heartRate) {
      setHeartRateData(mockData.heartRate);
    }
  };

  useEffect(() => {
    const checkDarkMode = () => {
      const darkModeClass = document.documentElement.classList.contains('dark');
      setIsDarkMode(darkModeClass);
    };

    checkDarkMode(); // Check dark mode initially

    // Set up an event listener for changes in the dark mode class
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    syncData(); // Sync data when the component mounts

    return () => observer.disconnect(); // Clean up observer
  }, []);

  // Ensure data is available before rendering
  if (heartRateData.length === 0) {
    return <div className="text-center dark:text-white">Loading data...</div>;
  }

  const data = {
    labels: heartRateData.map((point) => new Date(point.time).toLocaleTimeString()),
    datasets: [
      {
        label: 'Heart Rate (BPM)',
        data: heartRateData.map((point) => point.value),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
        },
      },
    },
  };

  return (
    <div className="bg-white/10 dark:bg-white/5 p-4 rounded-lg shadow-lg w-full dark:text-white backdrop-filter backdrop-blur-lg border border-white/20 dark:border-gray-600">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Heart Rate Chart</h2>
        <button onClick={syncData} className="bg-blue-500 text-white p-2 rounded-md">
          Sync Data
        </button>
      </div>
      <div className="w-full h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default HeartRateChart;
