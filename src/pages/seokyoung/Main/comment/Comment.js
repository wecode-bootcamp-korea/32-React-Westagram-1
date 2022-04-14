import React from "react";

function Comment({ comment }) {
  return (
    <li className="commentPost" key={comment.id}>
      <span>{comment.name}</span>
      <li>{comment.text}</li>
      <i className="fa-solid fa-xmark deleteBtn" />
    </li>
  );
}

export default Comment;
