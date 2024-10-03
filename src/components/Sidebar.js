import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-customGray3 h-screen p-4 mt-4 dark:bg-white/5 rounded-tr-lg shadow-lg backdrop-filter backdrop-blur-lg 
  border border-white/20 dark:border-t dark:border-r dark:border-white/5">
      <nav>
        <ul className="space-y-4">
          <li className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-md">
            <Link to="/heartbeat">Heart Rate</Link>
          </li>
          <li className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-md">
            <Link to="/sleep">Sleep</Link>
          </li>
          <li className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-md">
            <Link to="/steps">Steps</Link>
          </li>
          <li className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-md">
            <Link to="/calories">Calories Burned</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
