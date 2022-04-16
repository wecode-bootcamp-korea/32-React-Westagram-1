import React from "react";

const Comment = ({ array }) => {
  return (
    <ul>
      {array.map(e => {
        return (
          <li className="commentLi" key={e.id}>
            <span className="commentSpan">{e.userId}</span>
            <span>{e.comment}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Comment;
