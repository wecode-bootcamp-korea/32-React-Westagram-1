import React from "react";
import AsideRecommend from "../AsideRecommend/AsideRecommend";
import Footer from "../Footer/Footer";
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

      <AsideRecommend />

      <Footer />
    </aside>
  );
};

export default Aside;
