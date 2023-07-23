// VideoPlayerPage.js
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import videoData from "./data";
import "./styles.css";

const VideoPlayerPage = ({ match }) => {
  const videoId = parseInt(match.params.videoId);
  const video = videoData.find((video) => video.id === videoId);

  return (
    <div className="video-page">
      <Link to="/">Back to Home</Link>
      <ReactPlayer
        url={video.videoUrl}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
        onEnded={() => {
          // Handle video ended, e.g., go back to the home page
        }}
      />
    </div>
  );
};

export default VideoPlayerPage;
