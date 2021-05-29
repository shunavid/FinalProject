import React from "react";
import Post from "../component/Post";
import "./videos.css";

function videos({ infos }) {
  return (
    <div className="hajj-umrah">
      {infos.map((articles, index) => (
        <Post article={articles} key={index} />
      ))}
    </div>
  );
}

export default videos;
