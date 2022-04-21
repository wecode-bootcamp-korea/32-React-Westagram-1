import { useEffect, useState } from "react";
import FeedPost from "./feedPost/FeedPost";

function MainFeed() {
  const [feed, setFeed] = useState([{ feedName: "", img: "" }]);

  useEffect(() => {
    fetch("http://localhost:3000/data/seokyoung/feedData.json")
      .then(res => res.json())
      .then(res => {
        setFeed(res);
      });
  }, []);

  const mapMain = (
    <div className="feedMain">
      <FeedPost feed={feed} />
    </div>
  );
  return mapMain;
}

export default MainFeed;
