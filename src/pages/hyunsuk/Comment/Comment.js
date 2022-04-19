import React from "react";

import "./Comment.scss";

const Comment = ({ array }) => {
  return (
    <ul>
      {array.map(comment => {
        return (
          <li className="commentLi" key={comment.id}>
            <span className="commentSpan">{comment.userName}</span>
            <span>{comment.content}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Comment;
