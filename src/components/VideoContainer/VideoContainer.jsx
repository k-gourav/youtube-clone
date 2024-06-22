import Header from "../Header/Header";
import VideoPreview from "../VideoPreview/VideoPreview";
import "./VideoContainer.css";

const VideoContainer = () => {
  return (
    <div className="video-container">
      <Header />
      <VideoPreview />
    </div>
  );
};

export default VideoContainer;
