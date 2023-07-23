import React,{useState} from 'react';
import "./HarryStyles.css";
import ReactPlayer from "react-player";
import artData from './ArtData';



const App = () => {
  const [currentVideoUrl, setCurrentVideoUrl] = React.useState(null);

  const handlePlayClick = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
  };

  return (
    <div className="app">
      {artData.map((video) => (
        <div key={video.id} className="video-card">
          <img src={video.thumbnailUrl} alt={video.title} />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <button className="play-button" onClick={() => handlePlayClick(video.videoUrl)}>
            Play
          </button>
        </div>
      ))}

      {currentVideoUrl && (
        <div className="video-overlay">
          <ReactPlayer
            url={currentVideoUrl}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            onEnded={() => setCurrentVideoUrl(null)}
          />
        </div>
      )}
    </div>
  );
};

export default App;
