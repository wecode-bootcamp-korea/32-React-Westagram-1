import "./Aside.scss";
const Aside = () => {
  const followHandler = e => {
    if (e.target.className === "follow false") {
      e.target.className = "follow true";
    } else if (e.target.className !== "follow false") {
      e.target.className = "follow false";
    }
  };
  return (
    <aside className="main-right">
      <div className="rightHeader">
        <div className="header-img">
          <img src="/images/kyusung/wecode.png" alt="Wecode Logo" />
        </div>
        <div className="header-name">
          <p>wecode_bootcamp</p>
          <div className="bottomName">
            <span>Wecode</span>
            <div />
            <span>위코드</span>
          </div>
        </div>
      </div>
      <div className="story">
        <div className="story-header">
          <p>스토리</p>
          <p>모두 보기</p>
        </div>
        <div className="stories">
          <div className="story-info">
            <img src="/images/kyusung/feedimg.jpg" alt="" />
            <div className="story-info-el">
              <p>voyage</p>
              <span>16분전</span>
            </div>
          </div>
          <div className="story-info">
            <img src="/images/kyusung/asideImg1.png" alt="" />
            <div className="story-info-el">
              <p>wecode</p>
              <span>4시간전</span>
            </div>
          </div>
          <div className="story-info">
            <img src="/images/kyusung/asideImg2.png" alt="" />
            <div className="story-info-el">
              <p>chlrbtjd</p>
              <span>1시간전</span>
            </div>
          </div>
          <div className="story-info">
            <img src="/images/kyusung/asideImg3.png" alt="" />
            <div className="story-info-el">
              <p>coding</p>
              <span>40분전</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommend">
        <div className="recommend-header">
          <p>회원님을 위한 추천</p>
          <p>모두 보기</p>
        </div>
        <div className="recommends">
          <div className="recommend-info">
            <img src="/images/kyusung/asideImg1.png" alt="" />
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
      <div className="westagram-info">
        <span>소개</span>&middot;
        <span>도움말</span>&middot;
        <span>홍보 센터</span>&middot;
        <span>채용 정보</span>&middot;
        <span>개인정보 처리방침</span>&middot;
        <span>약관</span>&middot;
        <span>위치</span>
        <span>© 2022 INSTAGRAM FROM META</span>
      </div>
    </aside>
  );
};
export default Aside;
