import React from "react";
import "./Main.css";
import Nav from "../../../components/Nav/Nav";

const Main = props => {
  return (
    <>
      <Nav />
      <div className="Main">
        <main className="main">
          <section className="first-section">
            <article className="first-section-article">
              <div className="main-header-div">
                <div className="first-section-article-pfdiv">
                  <img src="/images/hyunsuk/dogprofile.jpg" alt="profile" />
                  <span>canon_mj</span>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis" />
                </div>
              </div>

              <div className="main-header-img-div">
                <img src="/images/hyunsuk/dogprofile.jpg" alt="" />
              </div>

              <div className="main-header-sub-div">
                <div className="iconlist">
                  <div className="iconlist-1">
                    <i className="fa-solid fa-heart" />
                    <i className="fa-solid fa-comment" />
                    <i className="fa-solid fa-comment" />
                  </div>
                  <div className="iconlist-2">
                    <i className="fa-solid fa-bookmark" />
                  </div>
                </div>
                <div className="main-header-sub-like-div">
                  <div className="first-section-article-pfdiv">
                    <img src="images/hyunsuk/dogprofile.jpg" alt="profile" />
                    <span>canon_mj님 외 10명이 좋아합니다.</span>
                  </div>
                </div>
                <div className="main-header-sub-comment-div">
                  <span>canon_mj</span>
                  <span>내가 키우는 강아지..</span>
                  <a href="#">더 보기</a>
                </div>
                <div className="main-header-sub-comment-div">
                  <span>neceosecius</span>
                  <span>귀엽다~~ 😀</span>
                </div>
                <div className="time-div">
                  <span className="time">42분 전</span>
                </div>

                <form id="reply-form" className="reply">
                  <input id="reply-input" placeholder="댓글 달기..." />
                  <button id="reply-button">게시</button>
                </form>
              </div>
            </article>
          </section>
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

              <div className="info-article-copy-div">
                &copy; 2022 위스타그램
              </div>
            </article>
          </aside>
        </main>
      </div>
    </>
  );
};

export default Main;
