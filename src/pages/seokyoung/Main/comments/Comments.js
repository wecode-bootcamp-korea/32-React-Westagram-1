import React from "react";
import Comment from "../comment/Comment";

function Comments({ commentsList }) {
  return (
    <ul className="commentPostList">
      {commentsList.map(item => (
        <Comment key={item.id} comment={item} />
      ))}
    </ul>
  );
}

export default Comments;
