import React from "react";

import { useEffect, useState } from "react";

import Comment from "../Comment/Comment";

import "./Comments.scss";

const Comments = () => {
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

  const onChange = e => {
    setComment(e.target.value);
  };

  const onClick = event => {
    event.preventDefault();
    // const newArr = [...array];
    if (comment.trim() !== "") {
      setArray(prev => [
        ...prev,
        { id: Date.now(), userName: "hello", content: comment },
      ]);
      // newArr.push({ id: Date.now(), userName: "hello", content: comment });
      // setArray(newArr);
    }
    setComment("");
  };

  return (
    <>
      <div>
        <Comment commentArray={array} />
      </div>

      <form id="reply-form" className="reply">
        <input
          id="reply-input"
          placeholder="댓글 달기..."
          onChange={onChange}
          value={comment}
        />
        <button id="reply-button" onClick={onClick}>
          게시
        </button>
      </form>
    </>
  );
};

export default Comments;
