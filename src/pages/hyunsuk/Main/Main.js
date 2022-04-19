import React from "react";
import { useState, useEffect } from "react";

import Nav from "../../../components/Nav/Nav";
import Feed from "../Feed/Feed";
import Aside from "../Aside/Aside";

import "./Main.scss";

const Main = () => {
  const [comment, setComment] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/common/commentData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setArray(data);
      });
  }, []);

  const onClick = event => {
    event.preventDefault();
    const newArr = [...array];
    if (comment.trim() !== "") {
      newArr.push({ id: Date.now(), userName: "hello", content: comment });
      setArray(newArr);
    }
    setComment("");
  };

  return (
    <>
      <Nav />
      <div className="Main">
        <main className="main">
          <section className="first-section">
            <Feed
              onclick={onClick}
              array={array}
              comment={comment}
              setComment={setComment}
            />
          </section>
          <Aside />
        </main>
      </div>
    </>
  );
};

export default Main;
