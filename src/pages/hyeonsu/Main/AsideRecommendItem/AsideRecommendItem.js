import React from "react";
import "./AsideRecommendItem.scss";

const AsideRecommendItem = ({ item }) => {
  return (
    <li className="aside-recommend-item">
      <div className="aside-recommend-item-left">
        <img
          alt={`Profile of ${item.userId}`}
          src={item.imgSrc}
          className="aside-recommend-item-profile"
        />
        <div className="aside-recommend-item-content">
          <strong className="user-id">{item.userId}</strong>
          <span className="aside-recommend-reason">{item.recommendReason}</span>
        </div>
      </div>
      <div className="aside-recommend-item-right">
        <button className="aside-recommend-button" type="button">
          팔로우
        </button>
      </div>
    </li>
  );
};

export default AsideRecommendItem;
