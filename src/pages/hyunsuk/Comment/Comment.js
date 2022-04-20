import React from "react";

import "./Comment.scss";

const Comment = ({ commentArray }) => {
  return (
    <ul>
      {commentArray.map(comment => {
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
