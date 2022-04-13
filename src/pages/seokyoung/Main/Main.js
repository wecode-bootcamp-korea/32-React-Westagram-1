import "../Main/Main.scss";
import Nav from "../../../components/Nav/Nav";

function Main() {
  return (
    <div className="Main">
      <Nav />
      <main className="main">
        <div className="feedMain">
          <article className="feedPost">
            <div className="feedTop">
              <img src="images/seokyoung/feed.jpeg" alt="" />
              <div className="feedTopName">heaundea_DDol</div>
            </div>
            <img className="feedImg" src="images/seokyoung/ddol.JPG" alt="" />
            <div className="commentBox">
              <div className="commentLogoBox">
                <img
                  className="navLogo"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="좋아요"
                />
                <img
                  className="navLogo"
                  src="images/seokyoung/chat.png"
                  alt="채팅"
                />
                <img
                  className="navLogo"
                  src="images/seokyoung/send.png"
                  alt="메시지"
                />
                <img
                  className="navLogo rightLogo"
                  src="images/seokyoung/bookmark-white.png"
                  alt="저장"
                />
              </div>
              <div className="likes">좋아요 623개</div>
              <div className="commentId">heaundea_DDol</div>
              <p className="commentContent">똘이 너무 귀엽죠?</p>
              <p className="comments">댓글 271개 모두 보기</p>
              <ul className="commentPostList" />
              <form className="commentInputBox">
                <img src="images/seokyoung/smile.png" alt="이모티콘" />
                <input
                  className="commentInput"
                  type="text"
                  placeholder="댓글 달기"
                />
                <button className="commentBtn">게시</button>
              </form>
            </div>
          </article>
        </div>
        <div className="feedRight">
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
          <div className="recommendFrineds">
            <div className="freinds">
              <div className="freind1">
                <img src="images/seokyoung/freind1.png" alt="친구1" />
                <div className="profileName">
                  wecode_bootCamp
                  <div className="profileKor">위코드 32기</div>
                </div>
                <div className="profileChange">팔로우</div>
              </div>
              <div className="freind1">
                <img src="images/seokyoung/freind2.png" alt="친구2" />
                <div className="profileName">
                  finda_offical
                  <div className="profileKor">핀다</div>
                </div>
                <div className="profileChange">팔로우</div>
              </div>
              <div className="freind1">
                <img src="images/seokyoung/friend3.png" alt="친구3" />
                <div className="profileName">
                  kakao_developer
                  <div className="profileKor">카카오</div>
                </div>
                <div className="profileChange">팔로우</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
