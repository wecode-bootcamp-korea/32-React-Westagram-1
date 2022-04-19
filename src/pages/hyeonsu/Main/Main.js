import React from "react";
import Nav from "../../../components/Nav/Nav";
import NavHyeonsu from "./NavHyeonsu/NavHyeonsu";
import Feed from "./Feed/Feed";
import Aside from "./Aside/Aside";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <Nav />
      <NavHyeonsu />
      <div className="wrapper">
        <Feed />
        <Aside />
      </div>
    </>
  );
};

export default Main;
