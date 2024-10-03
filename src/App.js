import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeartRateChart from './components/HeartRateChart';
import Sleep from './components/Sleep';
import Steps from './components/Steps';
import CaloriesBurned from './components/CaloriesBurned';

function App() {
  // Initialize the isDarkMode state based on localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode === 'true'; // Parse string to boolean
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    // Update the document class based on the new mode
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save the new mode to localStorage
    localStorage.setItem('isDarkMode', newMode);
  };

  // Effect to update the document class when the component mounts
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]); // Run this effect whenever isDarkMode changes

  return (
    <Router>
      <div className={`dashboard w-full h-screen overflow-hidden dark:bg-customGray4 ${isDarkMode ? 'dark' : ''}`}>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="flex">
          <Sidebar />
          <div className="content flex-grow p-4">
            <Routes>
              <Route path="/heartbeat" element={<HeartRateChart />} />
              <Route path="/sleep" element={<Sleep />} />
              <Route path="/steps" element={<Steps />} />
              <Route path="/calories" element={<CaloriesBurned />} />
              <Route path="/" element={<HeartRateChart />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
