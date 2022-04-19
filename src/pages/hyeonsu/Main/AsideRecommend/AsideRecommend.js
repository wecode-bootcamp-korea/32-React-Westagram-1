import React from "react";
import AsideRecommendHeader from "../AsideRecommendHeader/AsideRecommendHeader";
import AsideRecommendList from "../AsideRecommendList/AsideRecommendList";
import { RECOMMEND_ITEM } from "./asideRecommendData";
import "./AsideRecommend.scss";

const AsideRecommend = () => {
  return (
    <div className="aside-recommend">
      <AsideRecommendHeader />
      <AsideRecommendList list={RECOMMEND_ITEM} />
    </div>
  );
};

export default AsideRecommend;
