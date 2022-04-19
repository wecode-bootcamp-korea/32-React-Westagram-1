import React from "react";

function Comment({ comment }) {
  return (
    <li className="commentPost">
      <span>{comment.userName}</span>
      <div>{comment.content}</div>
      <i className="fa-solid fa-xmark deleteBtn" />
    </li>
  );
}

export default Comment;
