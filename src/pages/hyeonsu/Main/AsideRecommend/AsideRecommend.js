import React from "react";
import AsideRecommendHeader from "../AsideRecommendHeader/AsideRecommendHeader";
import AsideRecommendList from "../AsideRecommendList/AsideRecommendList";
import "./AsideRecommend.scss";

const AsideRecommend = () => {
  const recommendList = Array(5).fill({
    userId: "sfc.seongnam",
    imgSrc: "/images/hyeonsu/user-profile-2.jpeg",
    recommendReason: "회원님을 위한 추천",
  });

  return (
    <div className="aside-recommend">
      <AsideRecommendHeader />
      <AsideRecommendList list={recommendList} />
    </div>
  );
};

export default AsideRecommend;
