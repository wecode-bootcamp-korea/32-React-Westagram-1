import React from "react";

import "./Aside.scss";

const Aside = () => {
  return (
    <aside className="aside">
      <article className="aside-header-article">
        <div className="first-section-article-pfdiv aside-wecode-div">
          <img src="/images/hyunsuk/dogprofile.jpg" alt="profile" />
          <div className="wecode-div">
            <span>wecode_bootcamp</span>
            <span>Wecode | 위코드</span>
          </div>
        </div>
      </article>
      <article className="aside-story-article">
        <div className="story-div">
          <span>스토리</span>
          <span>모두 보기</span>
        </div>
        <div className="story-img-div">
          <img src="/images/hyunsuk/dogprofile.jpg" alt="" />
          <div className="story-img-div-div">
            <span>_yum_s</span>
            <span>16분 전</span>
          </div>
        </div>
        <div className="story-img-div">
          <img src="images/hyunsuk/dogprofile.jpg" alt="" />
          <div className="story-img-div-div">
            <span>_yum_s</span>
            <span>16분 전</span>
          </div>
        </div>
        <div className="story-img-div">
          <img src="images/hyunsuk/dogprofile.jpg" alt="" />
          <div className="story-img-div-div">
            <span>_yum_s</span>
            <span>16분 전</span>
          </div>
        </div>
      </article>
      <article className="aside-recommend-article">
        <div className="recommend-header-div">
          <span>회원님을 위한 추천</span>
          <span>모두 보기</span>
        </div>
        <div className="recommend-profile-div">
          <div className="recommend-wrapper">
            <img src="images/hyunsuk/dogprofile.jpg" alt="" />
            <div className="story-img-div-div recommend-div">
              <span>_yum_s</span>
              <span>_legend_a님 외 2명이 ...</span>
            </div>
          </div>
          <span className="follow">팔로우</span>
        </div>
        <div className="recommend-profile-div">
          <div className="recommend-wrapper">
            <img src="images/hyunsuk/dogprofile.jpg" alt="" />
            <div className="story-img-div-div recommend-div">
              <span>_yum_s</span>
              <span>_legend_a님 외 2명이 ...</span>
            </div>
          </div>
          <span className="follow">팔로우</span>
        </div>
        <div className="recommend-profile-div">
          <div className="recommend-wrapper">
            <img src="images/hyunsuk/dogprofile.jpg" alt="" />
            <div className="story-img-div-div recommend-div">
              <span>_yum_s</span>
              <span>_legend_a님 외 2명이 ...</span>
            </div>
          </div>
          <span className="follow">팔로우</span>
        </div>
      </article>
      <article className="aside-info-article">
        <div className="info-article-div">
          <span>Westagram 정보</span>
          <span>.지원</span>
          <span>.홍보 센터</span>
          <span>.API</span>
          <span>.해시태그</span>
          <span>.언어</span>
        </div>

        <div className="info-article-copy-div">&copy; 2022 위스타그램</div>
      </article>
    </aside>
  );
};

export default Aside;
