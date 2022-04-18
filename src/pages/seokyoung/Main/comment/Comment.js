import React from "react";

function Comment({ comment, deleteFunction }) {
  // console.log(deleteFunction);
  return (
    <li className="commentPost">
      <span>{comment.name}</span>
      <div>{comment.text}</div>
      <i onClick={deleteFunction} className="fa-solid fa-xmark deleteBtn" />
    </li>
  );
}

export default Comment;
