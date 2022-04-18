import React from "react";
import "./comment.scss";

const Comment = ({ arr }) => {
  return (
    <ul className="comments">
      {arr.map(comment => {
        return (
          <li className="comment" key={comment.id}>
            <h1 className="commentUserId">{comment.userName}</h1>
            <h1 className="userComment">{comment.content}</h1>
            <button className="deleteBtn">삭제{comment.isLiked}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Comment;
