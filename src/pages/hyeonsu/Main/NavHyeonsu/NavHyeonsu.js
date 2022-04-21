import React, { useEffect, useState } from "react";
import "./NavHyeonsu.scss";
import Dropdown from "./Dropdown/Dropdown";

const NavHyeonsu = () => {
  const [isProfileSettingActive, setIsProfileSettingActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [searchResultArray, setSearchResultArray] = useState([]);

  useEffect(() => {
    fetch("data/hyeonsu/userData.json")
      .then(res => res.json())
      .then(data => {
        setUserData(data);
        setSearchResultArray(data);
      });
  }, []);

  const onProfileSettingButtonFocus = () => {
    setIsProfileSettingActive(true);
  };

  const onProfileSettingButtonBlur = () => {
    setIsProfileSettingActive(false);
  };

  const onSearchInputChange = e => {
    setSearchInput(e.target.value);

    const filteredArray = [...userData].filter(item =>
      item.userId.startsWith(e.target.value.toLowerCase())
    );

    setSearchResultArray(filteredArray);
  };

  const onSearchInputFocus = () => {
    setIsSearchActive(true);
  };

  const onSearchInputBlur = () => {
    setIsSearchActive(false);
  };

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
          <input
            className="gnb-search-input"
            type="text"
            placeholder="검색"
            value={searchInput}
            onChange={onSearchInputChange}
            onFocus={onSearchInputFocus}
            onBlur={onSearchInputBlur}
          />
          <Dropdown
            type="searchResult"
            isActive={isSearchActive}
            searchResultArray={searchResultArray}
          />
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
              onFocus={onProfileSettingButtonFocus}
              onBlur={onProfileSettingButtonBlur}
            />
            <Dropdown type="profileSetting" isActive={isProfileSettingActive} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavHyeonsu;
