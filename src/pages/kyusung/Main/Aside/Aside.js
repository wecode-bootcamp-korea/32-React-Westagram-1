import { useState, useEffect } from "react";
import "./Aside.scss";
import AsideBottomDescription from "../AsideBottomDescription/AsideBottomDescription";
import AsideStoryComponent from "../AsideStoryComponent/AsideStoryComponent";
import AsideRecommendComponent from "../AsideRecommendComponent/AsideRecommendComponent";
const Aside = () => {
  const [AsideList, setAsideList] = useState([]);

  useEffect(() => {
    fetch("data/kyusung/asideData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setAsideList(data);
      });
  }, []);

  const followHandler = e => {
    e.target.className = `follow ${
      e.target.classList.contains("false") ? "true" : "false"
    }`;
  };

  return (
    <aside className="main-right">
      <div className="rightHeader">
        <div className="header-img">
          <img src="/images/kyusung/wecode.png" alt="Wecode Logo" />
        </div>
        <div className="header-name">
          <p>wecode_bootcamp</p>
          <div className="bottomName">
            <span>Wecode</span>
            <div />
            <span>위코드</span>
          </div>
        </div>
      </div>
      <div className="story">
        <div className="story-header">
          <p>스토리</p>
          <p>모두 보기</p>
        </div>
        <div className="stories">
          <AsideStoryComponent AsideList={AsideList} />
        </div>
      </div>
      <AsideRecommendComponent followHandler={followHandler} />
      <AsideBottomDescription />
    </aside>
  );
};
export default Aside;
