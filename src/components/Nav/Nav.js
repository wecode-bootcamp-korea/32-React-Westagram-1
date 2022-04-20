import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <header className="main-header">
      <nav className="gnb">
        <h1 className="gnb-logo">
          <a className="gnb-logo-link" href="#">
            <img
              alt="Westagram"
              src="/images/common/logo.png"
              className="gnb-logo-img"
            />
            <span className="gnb-logo-title">westagram</span>
          </a>
        </h1>

        <div className="gnb-search-wrapper">
          <i className="fa-solid fa-magnifying-glass" aria-hidden />
          <input className="gnb-search-input" type="text" placeholder="검색" />
        </div>

        <div className="gnb-button-group">
          <a
            className="gnb-button button-explore"
            href="#"
            aria-label="Explore some feeds"
          />
          <button
            className="gnb-button button-activities"
            type="button"
            aria-label="Open your activities modal"
          />
          <div className="gnb-profile-setting">
            <button
              className="gnb-button button-profile"
              type="button"
              aria-label="Open profile settings modal"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
