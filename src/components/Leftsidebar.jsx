import React from "react";
import { Home, Search, Bell, Mail, User } from "lucide-react";

const Leftsidebar = () => {
  return (
    <div className=" sticky top-24 flex flex-col h-[90vh]">
      {/* Navigation */}
      <div className=" space-y-4">
        <button className=" flex items-center space-x-3 text-lg font-medium text-blue-500">
          <Home className=" w-6 h-6 text-blue-500" />
          <span>Home</span>
        </button>
        <button className=" flex items-center space-x-3 text-lg font-medium hover:text-blue-500">
          <Search className=" w-6 h-6" />
          <span>Explore</span>
        </button>
        <button className=" flex items-center space-x-3 text-lg font-medium hover:text-blue-500">
          <Bell className=" w-6 h-6" />
          <span>Notifications</span>
        </button>
        <button className=" flex items-center space-x-3 text-lg font-medium hover:text-blue-500">
          <Mail className=" w-6 h-6" />
          <span>Messages</span>
        </button>
        <button className=" flex items-center space-x-3 text-lg font-medium hover:text-blue-500">
          <User className=" w-6 h-6" />
          <span>Profile</span>
        </button>
      </div>

      {/* Tweet buttton */}
      <button className=" mt-6 bg-blue-500 text-white rounded-full py-3 px-6 flex items-center justify-center space-x-2 hover:bg-blue-600 shadow-md">
        <span>Tweet</span>
      </button>
    </div>
  );
};

export default Leftsidebar;
