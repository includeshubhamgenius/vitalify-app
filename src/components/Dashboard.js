// src/components/Dashboard.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import HeartRateChart from "./HeartRateChart"; // Will create this component next

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4 bg-gray-100 h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Widgets */}
            <HeartRateChart />
            <div className="bg-white p-6 rounded-lg shadow-md">Steps</div>
            <div className="bg-white p-6 rounded-lg shadow-md">Sleep</div>
            <div className="bg-white p-6 rounded-lg shadow-md">Calories Burned</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
