import React from "react";
import AsideRecommendItem from "../AsideRecommendItem/AsideRecommendItem";
import "./AsideRecommendList.scss";

const AsideRecommendList = ({ list }) => {
  const AsideRecommendList = list.map((item, index) => (
    <AsideRecommendItem item={item} key={index} />
  ));

  return <ul className="aside-recommend-list">{AsideRecommendList}</ul>;
};

export default AsideRecommendList;
