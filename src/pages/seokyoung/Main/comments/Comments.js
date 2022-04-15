import React from "react";
import Comment from "../comment/Comment";

function Comments({ commentsList }) {
  console.log(commentsList);

  return (
    <ul className="commentPostList">
      {commentsList.map((item, i) => (
        <Comment key={i} comment={item} />
      ))}
    </ul>
  );
}

export default Comments;
