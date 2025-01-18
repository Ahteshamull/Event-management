import React from "react";
import Sidebar from "../components/Sidebar";
import Event from "../components/Event";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
        <div className="flex justify-center items-center">
          {/* <Sidebar /> */}

          <Event/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
