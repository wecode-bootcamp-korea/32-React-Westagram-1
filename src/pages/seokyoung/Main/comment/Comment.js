import React from "react";

function Comment({ comment }) {
  return (
    <li className="commentPost" key={comment.id}>
      <span>{comment.name}</span>
      <div>{comment.text}</div>
      <i className="fa-solid fa-xmark deleteBtn" />
    </li>
  );
}

export default Comment;
