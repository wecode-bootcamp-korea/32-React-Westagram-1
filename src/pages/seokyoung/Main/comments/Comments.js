import React from "react";
import Comment from "../comment/Comment";

function Comments({ commentsList }) {
  return (
    <ul>
      {commentsList.map((item, id) => (
        <Comment key={id} comment={item} />
      ))}
    </ul>
  );
}

export default Comments;