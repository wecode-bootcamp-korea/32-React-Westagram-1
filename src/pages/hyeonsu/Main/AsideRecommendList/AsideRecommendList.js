import React from "react";
import AsideRecommendItem from "../AsideRecommendItem/AsideRecommendItem";
import "./AsideRecommendList.scss";

const AsideRecommendList = ({ list }) => {
  return (
    <ul className="aside-recommend-list">
      {list.map((item, index) => (
        <AsideRecommendItem item={item} key={index} />
      ))}
    </ul>
  );
};

export default AsideRecommendList;
