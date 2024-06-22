import React from "react";
import "../../utils/constant";
import { videoCategories, videoList } from "../../utils/constant";

const VideoPreview = () => {
  return (
    <>
      <div className="video-categories">
        {videoCategories.map(() => {
          <div className="video-category"></div>
})}
      </div>
      <div className="video-list">
        {videoList.map(() => {
          <div className="video-content">
            <div className="video-img"></div>
            <div className="descript">
              <div className="logo"></div>
              <div className="text">
                <p></p>
                <p></p>
              </div>
            </div>
          </div>;
        })}
      </div>
    </>
  );
};

export default VideoPreview;
