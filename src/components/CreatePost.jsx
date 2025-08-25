import { useState } from "react";



export default function CreatePost({setPosts}) {
  const [text, setText] = useState("")

  const handleKeyDown=(e)=>{
    if(e.key==='Enter' && text.trim()!=="")
    {
      const newPost={
        id: Date.now(),
        username: "You",
        avatar:"https://i.pravatar.cc/100?img=11",
        time:"Just now",
        content: text,
        image:null,
      };
      setPosts(((prev)=> [newPost, ...prev]));
      setText("");
    }
  }
  return (
    <div className=" bg-white rounded-xl shadow-md p-4 mb-6">
      {/* Top Row with Avatar + input */}
      <div className=" flex items-center gap-3 mb-3">
        <img src="https://i.pravatar.cc/100?img=11" alt="avatar" className=" w-10 h-10 rounded-full" />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e)=> setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className=" w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Actions Row */}
      <div className=" flex justify-around text-sm text-gray-600">
        <button className=" flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 transition">📷 Photo</button>
        <button className=" flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 transition">🎥 Video</button>
        <button className=" flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 transition">🙂 Feeling</button>
      </div>
    </div>
  );
}
