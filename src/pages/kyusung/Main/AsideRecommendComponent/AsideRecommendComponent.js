import React from "react";
import "../AsideRecommendComponent/AsideRecommendComponent.scss";

function AsideRecommendComponent({ followHandler }) {
  return (
    <div className="recommend">
      <div className="recommend-header">
        <p>회원님을 위한 추천</p>
        <p>모두 보기</p>
      </div>
      <div className="recommends">
        <div className="recommend-info">
          <img src="/images/kyusung/asideImg1.png" alt="storyRecomment-Img" />
          <div className="recommend-info-el">
            <p>wecode</p>
            <span>4시간전</span>
            <span className="follow false" onClick={followHandler}>
              팔로우
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideRecommendComponent;
