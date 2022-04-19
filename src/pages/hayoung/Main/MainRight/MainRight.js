import Feed from "../Feed/Feed";

import "./MainRight.scss";

const mainRight = () => {
  return (
    <div className="main_right">
      <div className="user_id">
        <img
          className="user_profile"
          src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
        />
        <span className="user_id_name">
          <p>ha0__</p>
          <p>wecode | 이하영</p>
        </span>
      </div>
      <div className="story_box">
        <span className="box_text">
          <p>스토리</p>
          <p>모두 보기</p>
        </span>
        <div className="story_id">
          <img
            className="story_id_profile"
            src="https://images.unsplash.com/photo-1649035571136-d2fe2a15b341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <span className="story_id_name">
            <p>bts__jk</p>
            <p>16분전</p>
          </span>
        </div>
        <div className="story_id">
          <img
            className="story_id_profile"
            src="https://images.unsplash.com/photo-1649026166267-5f474e9280e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          />
          <span className="story_id_name">
            <p>hayoung_haha</p>
            <p>2시간 전</p>
          </span>
        </div>
        <div className="story_id">
          <img
            className="story_id_profile"
            src="https://images.unsplash.com/photo-1649009060896-119c6ef99a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          />
          <span className="story_id_name">
            <p>haha__00</p>
            <p>5시간 전</p>
          </span>
        </div>
      </div>
      <div className="recommend_box">
        <span className="box_text">
          <p>회원님을 위한 추천</p>
          <p>모두 보기</p>
        </span>
        <div className="recommend_id">
          <img
            className="recommend_id_profile"
            src="https://images.unsplash.com/photo-1649035571136-d2fe2a15b341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <span className="recommend_id_name">
            <p>adgd_Dggs</p>
            <p>_s2e1f2님 외 2명이...</p>
          </span>
          <span className="follower_text">팔로워</span>
        </div>
        <div className="recommend_id">
          <img
            className="recommend_id_profile"
            src="https://images.unsplash.com/photo-1649026166267-5f474e9280e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          />
          <span className="recommend_id_name">
            <p>jjjjjjjk</p>
            <p>thv23님 외 1223명...</p>
          </span>
          <div className="follower">
            <span className="follower_text">팔로워</span>
          </div>
        </div>
        <div className="recommend_id">
          <img
            className="recommend_id_profile"
            src="https://images.unsplash.com/photo-1649009060896-119c6ef99a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          />
          <span className="recommend_id_name">
            <p>ha___00000</p>
            <p>gdsgd12405님 외1...</p>
          </span>
          <span className="follower_text">팔로워</span>
        </div>
      </div>
      <p className="info">
        Instagram 정보 . 지원 . 홍보 센터 . API . <br />
        채용 정보 . 개인정보처리방침 . 약관 . <br />
        디렉터리 . 프로필 . 해시태그 . 언어
      </p>
      <p className="info">©2022 INSTAGRAM</p>
    </div>
  );
};

export default mainRight;
