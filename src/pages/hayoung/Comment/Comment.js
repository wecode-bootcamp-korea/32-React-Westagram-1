import React from "react";

const Comment = ({ arr }) => {
  return (
    <ul className="comments">
      {arr.map(e => {
        return (
          <li className="comment" key={e.id}>
            <h1 className="commentUserId">{e.userid}</h1>
            <h1 className="userComment">{e.comment}</h1>
            <button className="deleteBtn">삭제</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Comment;
