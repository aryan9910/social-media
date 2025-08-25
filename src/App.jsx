import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Postcard from "./components/Postcard";
import postsData from "./data/posts.js";
import CreatePost from "./components/CreatePost.jsx";
import RightSidebar from "./components/RightSidebar.jsx";
import Leftsidebar from "./components/Leftsidebar.jsx";

const App = () => {
  const [posts, setPosts] = useState(postsData);
  return (
    <div className=" bg-gray-100 min-h-screen">
      <Navbar />
    

      {/* page layout */}
      <div className=" max-w-6xl mx-auto mt-6 px-4 gap-6 grid grid-cols-1 lg:grid-cols-4">

          {/* Left Side Bar */}
      <div className=" hidden lg:block sticky top-24 h-fit">
        <Leftsidebar/>  
      </div>

        {/* Feed Section */}
        <div className=" lg:col-span-2">
          <CreatePost setPosts={setPosts} />
          {posts.map((post) => (
            <Postcard key={post.id} username={post.username} avatar={post.avatar} time={post.time} content={post.content} image={post.image} />
          ))}
        </div>

        {/* Right sidebar column   */}
        <div className=" hidden lg:block sticky top-24 h-fit">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
