import React, { useState } from "react";

export default function Postcard({ username, avatar, time, content, image, post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  };

  const handleAddComment = () => {
    if (commentText.trim() === "") return;
    setComments([...comments, commentText]);
    setCommentText("");
  };
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      {/* userInfo */}
      <div className=" flex items-center gap-3 mb-3">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className=" font-semibold text-gray-800">{username}</h3>
          <p className=" text-xs text-gray-500">{time}</p>
        </div>
      </div>

      {/* Post content */}
      <p className=" text-gray-700 mb-3">{content}</p>
      {image && <img src={image} alt="post" className=" w-full h-64 object-cover rounded-lg mb-3" />}

      {/* comments section */}
      {showComments && (
        <div className=" mt-3 space-y-2">
          {/* Existing comments */}
          {comments.map((c, i) => (
            <p key={i} className=" bg-gray-100 rounded-lg px-3 py-1 text-sm">
              {c}
            </p>
          ))}

          {/* Add new comment */}
          <div className=" flex gap-2 mt-2">
            <input
              type="text"
              placeholder="Write a comment...."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className=" flex border rounded-xl px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button onClick={handleAddComment} className=" px-3 py-1 bg-green-500 text-white rouned-lg hover:bg-green-600 transition">
              Post
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className=" flex justify-around text-gray-600 text-sm font-medium border-t pt-2">
        <button onClick={handleLike} className={`flex items-center gap-1 hover:text-blue-500 transition ${liked ? "text-blue-500 font-semibold" : ""}`}>
          👍 Like {likes > 0 && <span>&nbsp;{likes}</span>}
        </button>
        <button onClick={() => setShowComments(!showComments)} className=" flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 transition">
          💬<span>Comment</span>
          {comments.length > 0 && <span>&nbsp;{comments.length}</span>}
        </button>
        <button className=" flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 transition">
          🔗<span>Share</span>{" "}
        </button>
      </div>
    </div>
  );
}
