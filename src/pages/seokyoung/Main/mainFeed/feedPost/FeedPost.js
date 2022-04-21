import React, { useEffect, useState } from "react";
import Comments from "../../comments/Comments";
import CommentLogoBox from "../commentLogoBox/CommentLogoBox";
import InputBox from "../inputBox/InputBox";

const FeedPost = props => {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [keyNum, setKeyNum] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/data/common/commentData.json")
      .then(res => res.json())
      .then(res => {
        setComments(res);
        setKeyNum(res.length + 1);
      });
  }, []);

  const inputChange = e => {
    setInputValue(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    const copy = inputValue.slice().trim();
    if (copy !== "") {
      setComments([
        ...comments,
        { id: keyNum, userName: "석영", content: inputValue },
      ]);
    }
    setKeyNum(prev => prev + 1);
    setInputValue("");
  };

  const deleteBtn = id => {
    const newCommentList = comments.filter(item => item.id !== id);
    setComments(newCommentList);
  };

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
          <Comments commentsList={comments} deleteBtn={deleteBtn} />
          <InputBox
            addComment={addComment}
            inputChange={inputChange}
            inputValue={inputValue}
          />
        </div>
      </article>
    );
  });
  return feedlist;
};

export default FeedPost;