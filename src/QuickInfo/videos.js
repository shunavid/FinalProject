import React from "react";
import Post from "../component/Post";
import "./videos.css";

function videos({ infos }) {
  return (
    <div>
      <div className=" " style={{ color: "#F0FFFF" }}>
        .
      </div>
      <div className="Quick-info mt-4">
        {infos.map((article, index) => (
          <Post article={article} />
        ))}
      </div>
    </div>
  );
}

export default videos;
