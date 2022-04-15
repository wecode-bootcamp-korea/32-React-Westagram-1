import React from "react";
import "./Aside.scss";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside-profile">
        <div className="aside-profile-left">
          <img
            alt="Profile of Hyeonsu Kim"
            src="/images/hyeonsu/user-profile.jpeg"
            className="aside-profile-img"
          />
          <div className="aside-profile-id">
            <strong className="user-id">garuda352</strong>
            <span className="user-username">Hyeonsu Kim</span>
          </div>
        </div>

        <div className="aside-profile-right">
          <button className="aside-profile-button" type="button">
            전환
          </button>
        </div>
      </div>

      <div className="aside-recommend">
        <header className="aside-recommend-header">
          <h3>회원님을 위한 추천</h3>
          <a href="#">모두 보기</a>
        </header>
        <ul className="aside-recommend-list">
          <li className="aside-recommend-item">
            <div className="aside-recommend-item-left">
              <img
                alt="Profile of Seongnam FC"
                src="/images/hyeonsu/user-profile-2.jpeg"
                className="aside-recommend-item-profile"
              />
              <div className="aside-recommend-item-content">
                <strong className="user-id">sfc.seongnam</strong>
                <span className="aside-recommend-reason">
                  회원님을 위한 추천
                </span>
              </div>
            </div>
            <div className="aside-recommend-item-right">
              <button className="aside-recommend-button" type="button">
                팔로우
              </button>
            </div>
          </li>
          <li className="aside-recommend-item">
            <div className="aside-recommend-item-left">
              <img
                alt="Profile of Seongnam FC"
                src="/images/hyeonsu/user-profile-2.jpeg"
                className="aside-recommend-item-profile"
              />
              <div className="aside-recommend-item-content">
                <strong className="user-id">sfc.seongnam</strong>
                <span className="aside-recommend-reason">
                  회원님을 위한 추천
                </span>
              </div>
            </div>
            <div className="aside-recommend-item-right">
              <button className="aside-recommend-button" type="button">
                팔로우
              </button>
            </div>
          </li>
          <li className="aside-recommend-item">
            <div className="aside-recommend-item-left">
              <img
                alt="Profile of Seongnam FC"
                src="/images/hyeonsu/user-profile-2.jpeg"
                className="aside-recommend-item-profile"
              />
              <div className="aside-recommend-item-content">
                <strong className="user-id">sfc.seongnam</strong>
                <span className="aside-recommend-reason">
                  회원님을 위한 추천
                </span>
              </div>
            </div>
            <div className="aside-recommend-item-right">
              <button className="aside-recommend-button" type="button">
                팔로우
              </button>
            </div>
          </li>
          <li className="aside-recommend-item">
            <div className="aside-recommend-item-left">
              <img
                alt="Profile of Seongnam FC"
                src="/images/hyeonsu/user-profile-2.jpeg"
                className="aside-recommend-item-profile"
              />
              <div className="aside-recommend-item-content">
                <strong className="user-id">sfc.seongnam</strong>
                <span className="aside-recommend-reason">
                  회원님을 위한 추천
                </span>
              </div>
            </div>
            <div className="aside-recommend-item-right">
              <button className="aside-recommend-button" type="button">
                팔로우
              </button>
            </div>
          </li>
          <li className="aside-recommend-item">
            <div className="aside-recommend-item-left">
              <img
                alt="Profile of Seongnam FC"
                src="/images/hyeonsu/user-profile-2.jpeg"
                className="aside-recommend-item-profile"
              />
              <div className="aside-recommend-item-content">
                <strong className="user-id">sfc.seongnam</strong>
                <span className="aside-recommend-reason">
                  회원님을 위한 추천
                </span>
              </div>
            </div>
            <div className="aside-recommend-item-right">
              <button className="aside-recommend-button" type="button">
                팔로우
              </button>
            </div>
          </li>
        </ul>
      </div>

      <footer className="aside-footer">
        <ul className="aside-footer-list">
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              소개
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              도움말
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              홍보 센터
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              API
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              채용 정보
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              개인정보처리방침
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              약관
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              위치
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              인기 계정
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              해시태그
            </a>
          </li>
          <li className="aside-footer-item">
            <a className="aside-footer-item-link" href="#">
              언어
            </a>
          </li>
        </ul>
        <span className="aside-copy">&copy; 2022 WESTAGRAM FROM WECODE</span>
      </footer>
    </aside>
  );
};

export default Aside;
