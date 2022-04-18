import { useState } from "react";
import Comments from "../comments/Comments";
import CommentLogoBox from "./commentLogoBox/CommentLogoBox";
import FeedPost from "./feedPost/FeedPost";
import InputBox from "./inputBox/InputBox";

function MainFeed() {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [keyNum, setKeyNum] = useState(0);

  function inputChange(e) {
    setInputValue(e.target.value);
  }

  function addComment(e) {
    e.preventDefault();
    const copy = inputValue.slice().trim();
    if (copy !== "") {
      setComments([
        ...comments,
        { id: keyNum, name: "석영", text: inputValue },
      ]);
    }
    setKeyNum(prev => prev + 1);
    setInputValue("");
  }

  return (
    <div className="feedMain">
      <article className="feedPost">
        <FeedPost />
        <div className="commentBox">
          <CommentLogoBox />
          <Comments commentsList={comments} />
          <InputBox
            addComment={addComment}
            inputChange={inputChange}
            inputValue={inputValue}
          />
        </div>
      </article>
    </div>
  );
}

export default MainFeed;
