import React from "react";

function Comment({ comment }) {
  return (
    <li key={comment.id}>
      <span>{comment.name}</span>
      <div>{comment.text}</div>
      <button>삭제</button>
    </li>
  );
}

export default Comment;
