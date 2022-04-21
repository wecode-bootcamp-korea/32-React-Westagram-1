import React from "react";
import Comment from "../comment/Comment";

function Comments({ commentsList, deleteBtn }) {
  return (
    <ul className="commentPostList">
      {commentsList.map(item => (
        <Comment
          key={item.id}
          id={item.id}
          comment={item}
          deleteBtn={deleteBtn}
        />
      ))}
    </ul>
  );
}

export default Comments;
