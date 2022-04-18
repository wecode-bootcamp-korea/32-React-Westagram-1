import React from "react";

import "./Dropdown.scss";

const Dropdown = ({ type, isActive }) => {
  const dropdownLists = [
    {
      type: "searchResult",
      className: "gnb-search-result",
      isActive: isActive,
      array: [
        {
          id: "wecode_bootcamp",
          username: ">wecode | 위코드",
          profileImgUrl:
            "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/53930194_2310969732301384_5134167175078084608_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2QAs8zwSlP0AX9Yv2f9&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9koDC1iUJjCHPBquxVXhGHmIKWITRsl7teV5B8J9xCUA&oe=62732DB2",
        },
        {
          id: "sfc.seongnam",
          username: "성남FC - Seongnam FC",
          profileImgUrl:
            "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/52606079_1182941335204372_5780145288782020608_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8eSGiwkmhv8AX_ZAVko&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9mf9yHtSNjSQ7yHFvBWYafvkBDAwdUo0vPmrvRFngXaw&oe=6272465A",
        },
        {
          id: "suwonsamsungfc",
          username: "수원삼성블루윙즈축구단",
          profileImgUrl:
            "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/179942605_3973581779374288_4019617340567091806_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aLb1iZ9O798AX8TnE-S&tn=Af7c0gtskNonnRcz&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9dx38wVLtSitl48yjLn1fePmYzpoPPcacR3oDTOyviLQ&oe=62729187",
        },
        {
          id: "suwonfc",
          username: "수원FC (Suwon FC)",
          profileImgUrl:
            "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/241263193_5993106480763304_6447924619962113569_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=opmy1_zR0D8AX_uMgfy&tn=Af7c0gtskNonnRcz&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_iMCZnOSt8Z7TQBwUGB41pdsEuznNioQFYfuMpXa37Lw&oe=625045FD",
        },
      ],
    },
    {
      type: "profileSetting",
      className: "gnb-profile-setting",
      isActive: isActive,
      array: [
        {
          ariaLabel: "Go to profile page",
          iconClassName: "fa-regular fa-user",
          title: "프로필",
        },
        {
          ariaLabel: "Go to bookmark page",
          iconClassName: "fa-regular fa-bookmark",
          title: "저장됨",
        },
        {
          ariaLabel: "Go to setting page",
          iconClassName: "fa-solid fa-gear",
          title: "설정",
        },
        {
          ariaLabel: "Rotate account",
          iconClassName: "fa-solid fa-arrows-rotate",
          title: "계정전환",
        },
        {
          ariaLabel: "Logout",
          iconClassName: "",
          title: "로그아웃",
        },
      ],
    },
  ];

  const dropdownList = dropdownLists.find(list => list.type === type);
  let dropdownItems;

  if (type === "profileSetting") {
    dropdownItems = dropdownList.array.map((item, index) => (
      <li
        className={`${dropdownList.className}-item dropdown-item`}
        key={index}
      >
        <a href="#" aria-label={item.ariaLabel}>
          <i className={item.iconClassName} aria-hidden />
          <span>{item.title}</span>
        </a>
      </li>
    ));
  } else if (type === "searchResult") {
    dropdownItems = dropdownList.array.map((item, index) => (
      <li key={index}>{item.username}</li>
    ));
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
