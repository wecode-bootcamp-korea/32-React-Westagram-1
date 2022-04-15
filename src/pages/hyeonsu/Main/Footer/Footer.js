import React from "react";
import "./Footer.scss";

const Footer = () => {
  const footerItemArray = [
    "소개",
    "도움말",
    "홍보 센터",
    "API",
    "채용 정보",
    "개인정보처리방침",
    "약관",
    "위치",
    "인기 계정",
    "해시태그",
    "언어",
  ];

  const footerList = footerItemArray.map((item, index) => (
    <li key={index} className="aside-footer-item">
      <a className="aside-footer-item-link" href="#">
        {item}
      </a>
    </li>
  ));

  return (
    <footer className="aside-footer">
      <ul className="aside-footer-list">{footerList}</ul>
      <span className="aside-footer-copy">
        &copy; 2022 WESTAGRAM FROM WECODE
      </span>
    </footer>
  );
};

export default Footer;
