import React from 'react';
import logo from '../logo.png';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-customGray3 dark:bg-customGray4 text-black dark:text-customTextColour dark:border-gray-800 border-b">
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="h-9 w-auto mr-3" />
      <h1 className="text-3xl font-bold">Vitalify Dashboard</h1>
    </div>
    <button 
      onClick={toggleDarkMode} 
      className="bg-black dark:bg-customTextColour text-white dark:text-black p-2 rounded-md"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  </header>
  );
};

export default Header;
