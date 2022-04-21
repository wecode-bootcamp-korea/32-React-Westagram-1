import React from "react";

function Comment({ comment, deleteBtn, id }) {
  return (
    <li className="commentPost">
      <span>{comment.userName}</span>
      <div>{comment.content}</div>
      <i
        className="fa-solid fa-xmark deleteBtn"
        onClick={() => deleteBtn(id)}
      />
    </li>
  );
}

export default Comment;
