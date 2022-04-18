import { useEffect, useState } from "react";
import FeedPost from "./feedPost/FeedPost";

function MainFeed() {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [keyNum, setKeyNum] = useState(0);
  const [feed, setFeed] = useState([
    { feedName: "syoung_h", img: "images/seokyoung/ddol.JPG" },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/data/common/commentData.json")
      .then(res => res.json())
      .then(res => {
        setComments(res);
        setKeyNum(res.length + 1);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/data/seokyoung/feedData.json")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setFeed(res);
      });
  }, []);

  function inputChange(e) {
    setInputValue(e.target.value);
  }

  function addComment(e) {
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
  }

  return (
    <div className="feedMain">
      <FeedPost
        feed={feed}
        comments={comments}
        inputValue={inputValue}
        inputChange={inputChange}
        addComment={addComment}
      />
    </div>
  );
}

export default MainFeed;
