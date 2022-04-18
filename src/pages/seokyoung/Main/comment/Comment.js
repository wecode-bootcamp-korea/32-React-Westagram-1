import React from "react";

function Comment({ comment, deleteFunction }) {
  return (
    <li className="commentPost">
      <span>{comment.userName}</span>
      <div>{comment.content}</div>
      <i onClick={deleteFunction} className="fa-solid fa-xmark deleteBtn" />
    </li>
  );
}

export default Comment;
