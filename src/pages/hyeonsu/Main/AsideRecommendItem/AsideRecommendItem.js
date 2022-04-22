import React from "react";
import "./AsideRecommendItem.scss";

const AsideRecommendItem = ({ item }) => {
  const { userId, imgSrc, recommendReason } = item;

  return (
    <li className="aside-recommend-item">
      <div className="aside-recommend-item-left">
        <img
          alt={`Profile of ${userId}`}
          src={imgSrc}
          className="aside-recommend-item-profile"
        />
        <div className="aside-recommend-item-content">
          <strong className="user-id">{userId}</strong>
          <span className="aside-recommend-reason">{recommendReason}</span>
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
