import React from "react";
import ReactPlayer from "react-player";

function InfoVideos({ url }) {
  return (
    <div className="video-infor">
      <ReactPlayer
        width="101%"
        height="23rem"
        style={{ backgroundColor: "cadetblue" }}
        controls
        url={url}
        onReady={() => console.log("onReady callback")}
        onStart={() => console.log("onStart callback")}
        onPause={() => console.log("onPause callback")}
        onEnded={() => console.log("onEnded callback")}
        onError={() => console.log("onError callback")}
      />
    </div>
  );
}

export default InfoVideos;
