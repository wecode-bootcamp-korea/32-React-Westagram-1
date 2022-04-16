import React from "react";

const Comment = ({ array }) => {
  return (
    <ul>
      {array.map((e, i) => {
        return (
          <li className="commentLi" key={i}>
            <span className="commentSpan">{e.id}</span>
            <span>{e.comment}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Comment;
