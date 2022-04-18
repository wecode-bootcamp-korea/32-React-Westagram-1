import React from "react";
import Comments from "../../comments/Comments";
import CommentLogoBox from "../commentLogoBox/CommentLogoBox";
import InputBox from "../inputBox/InputBox";

const FeedPost = props => {
  return (
    <article className="feedPost">
      <div className="feedTop">
        <img src="images/seokyoung/feed.jpeg" alt="" />
        <div className="feedTopName">heaundea_DDol</div>
      </div>
      <img className="feedImg" src="images/seokyoung/ddol.JPG" alt="" />
      <div className="commentBox">
        <CommentLogoBox />
        <Comments commentsList={props.comments} />
        <InputBox
          addComment={props.addComment}
          inputChange={props.inputChange}
          inputValue={props.inputValue}
        />
      </div>
    </article>
  );
};

export default FeedPost;
