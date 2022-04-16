import React from "react";

const Comment = ({ arr }) => {
  return (
    <ul className="comments">
      <li className="comment">
        <span>
          {arr.map((e, i) => (
            <h1 className="commentUserId" key={i}>
              {e.id}
            </h1>
          ))}
        </span>
        <div>
          {arr.map((e, i) => (
            <h1 className="userComment" key={i}>
              {e.comment}
            </h1>
          ))}
        </div>
        <button className="deleteBtn"></button>
      </li>
    </ul>
  );
};

export default Comment;
