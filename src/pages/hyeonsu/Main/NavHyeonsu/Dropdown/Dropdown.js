import React from "react";

import "./Dropdown.scss";

const Dropdown = ({ type, isActive, searchResultArray }) => {
  const dropdownLists = [
    {
      type: "searchResult",
      className: "gnb-search-result",
      isActive: isActive,
      array: searchResultArray,
    },
    {
      type: "profileSetting",
      className: "gnb-profile-setting",
      isActive: isActive,
      array: [
        {
          id: 1,
          ariaLabel: "Go to profile page",
          iconClassName: "fa-regular fa-user",
          title: "프로필",
        },
        {
          id: 2,
          ariaLabel: "Go to bookmark page",
          iconClassName: "fa-regular fa-bookmark",
          title: "저장됨",
        },
        {
          id: 3,
          ariaLabel: "Go to setting page",
          iconClassName: "fa-solid fa-gear",
          title: "설정",
        },
        {
          id: 4,
          ariaLabel: "Rotate account",
          iconClassName: "fa-solid fa-arrows-rotate",
          title: "계정전환",
        },
        {
          id: 5,
          ariaLabel: "Logout",
          iconClassName: "",
          title: "로그아웃",
        },
      ],
    },
  ];

  const dropdownList = dropdownLists.find(list => list.type === type);
  const { className } = dropdownList;
  let dropdownItems;

  if (type === "profileSetting") {
    dropdownItems = dropdownList.array.map(
      ({ id, ariaLabel, iconClassName, title }) => (
        <li className={`${className}-item dropdown-item`} key={id}>
          <a href="#" aria-label={ariaLabel}>
            <i className={iconClassName} aria-hidden />
            <span>{title}</span>
          </a>
        </li>
      )
    );
  } else if (type === "searchResult") {
    dropdownItems = dropdownList.array.map(
      ({ id, username, profileImgUrl, userId }) => (
        <li className={`${className}-item dropdown-item`} key={id}>
          <a href="#">
            <div className={`${className}-item-left`}>
              <img
                alt={`Profile of ${username}`}
                src={`${profileImgUrl}`}
                className={`${className}-item-img`}
              />
              <div>
                <strong className={`${className}-item-id`}>{userId}</strong>
                <span className={`${className}-item-id`}>{username}</span>
              </div>
            </div>
            <div className={`${className}-item-right`}>
              <i className="fa-solid fa-x" aria-hidden />
            </div>
          </a>
        </li>
      )
    );
  }

  return (
    <div
      className={`${dropdownList.className}-dropdown dropdown ${
        dropdownList.isActive && "is-active"
      }`}
    >
      <ul className={`${dropdownList.className}-list dropdown-list`}>
        {dropdownItems}
      </ul>
    </div>
  );
};

export default Dropdown;
