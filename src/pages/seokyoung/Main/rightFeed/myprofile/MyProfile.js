import React from "react";

function MyProfile() {
  return (
    <>
      <div className="feedRightProfile">
        <img src="images/seokyoung/profile.JPG" alt="프로필" />
        <div className="profileName">
          syoung___h
          <div className="profileKor">석영</div>
        </div>
        <div className="profileChange">전환</div>
      </div>
      <div className="feedRightRecommendBox">
        <div className="RecommendText1">회원님을 위한 추천</div>
        <div className="RecommendText2">모두 보기</div>
      </div>
    </>
  );
}

export default MyProfile;
