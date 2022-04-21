import React from "react";
import "../AsideStoryComponent/AsideStoryComponent.scss";

function AsideStoryComponent({ AsideList }) {
  return AsideList.map(({ id, userName, userImg, commentTime }) => {
    return (
      <div className="story-info" key={id}>
        <img src={userImg} alt="storyFeed1" />
        <div className="story-info-el">
          <p>{userName}</p>
          <span>{commentTime}</span>
        </div>
      </div>
    );
  });
}

export default AsideStoryComponent;
