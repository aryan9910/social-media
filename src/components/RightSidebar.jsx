import React from "react";

const RightSidebar = () => {
  return (
    <div className=" space-y-6 sticky top-20">
        {/* search bar */}
        <div className=" bg-wbite p-3 rounded-2xl shadow-md">
            <input type="text" placeholder="Search....." className=" w-full p-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    
      {/* Who to follow */}
    <div className=" bg-white p-4 rounded-2xl shadow-md space-y-6">
      <div>
        <h2 className=" text-lg font-semibold mb-4">Who to follow</h2>
        {/* Suggested user */}
        <div className=" flex items-center justify-between mb-4">
          <div className=" flex items-center">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="user" className=" w-10 h-10 rounded-full" />
            <div className=" ml-3">
              <p className=" text-sm font-medium">Mike Josling</p>
              <p className=" text-xs text-gray-500">@mikejosling</p>
            </div>
          </div>
          <button className=" text-blue-500 text-sm font-medium hover:underline">Follow</button>
        </div>

        {/* Another user */}
        <div className=" flex items-center justify-between mb-4">
          <div className=" flex items-center">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" className=" w-10 h-10 rounded-full" />
            <div className=" ml-3">
              <p className=" text-sm font-medium">Jane Smith</p>
              <p className=" text-xs text-gray-500">@janesmith</p>
            </div>
          </div>
          <button className=" text-blue-500 text-sm font-medium hover:underline">Follow</button>
        </div>
      </div>
      {/* Show more */}
      <button className=" text-blue-500 text-sm font-medium hover:underline">
        Show more
      </button>
      {/* New trending topics */}
      <div>
        <h2 className=" text-lg font-semibold mb-4">Trending topics</h2>
        <ul className=" space-y-3">
            <li>
                <p className=" text-sm font-medium text-gray-800">#ReactJS</p>
                <p className=" text-xs text-gray-500">120k posts</p>
            </li>
            <li>
                <p className=" text-sm font-medium text-gray-800">#TailwindCSS</p>
                <p className=" text-xs text-gray-500">95k posts</p>
            </li>
            <li>
                <p className=" text-sm font-medium text-gray-800">#OpenAI</p>
                <p className=" text-xs text-gray-500">72k posts</p>
            </li>
        </ul>
      </div>

    </div>
    </div>

  );
};

export default RightSidebar;
