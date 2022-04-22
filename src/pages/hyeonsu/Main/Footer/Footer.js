import React from "react";
import { FOOTER_ITEM } from "./footerData";
import "./Footer.scss";

const Footer = () => {
  const footerList = FOOTER_ITEM.map(({ id, content }) => (
    <li key={id} className="aside-footer-item">
      <a className="aside-footer-item-link" href="#">
        {content}
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
