import React from "react";
import Comments from "../../comments/Comments";
import CommentLogoBox from "../commentLogoBox/CommentLogoBox";
import InputBox from "../inputBox/InputBox";

const FeedPost = props => {
  const feedlist = props.feed.map((x, index) => {
    return (
      <article key={index} className="feedPost">
        <div className="feedTop">
          <img src="images/seokyoung/feed.jpeg" alt="" />
          <div className="feedTopName">{x.feedName}</div>
        </div>
        <img className="feedImg" src={x.img} alt="" />
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
  });
  return feedlist;
};

export default FeedPost;
