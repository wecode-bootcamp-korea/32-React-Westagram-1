import { useState } from "react";
import "./Main.scss";
import Nav from "../../../components/Nav/Nav";

const Main = () => {
  const [userId, getUserId] = useState("");
  const [comment, getUserComment] = useState("");

  const [commentArray, setCommentArray] = useState([
    { id: "a", comment: "a" },
    { id: "v", comment: "b" },
  ]);

  const handleCommentEnter = e => {
    e.preventDefault();
    const newArr = [...commentArray];
    newArr.push({ id: userId, comment: comment });
    setCommentArray(newArr);
    e.target.value = "";
  };

  return (
    <>
      <Nav />
      <section>
        <div className="mainPage">
          <div className="feeds">
            <article>
              <div className="articleHeader">
                <div className="headerLeft">
                  <i className="fa-brands fa-apple fa-2x" />
                  <span>Wecode 32기~!</span>
                </div>
                <div className="headerRight">
                  <i className="fa-solid fa-ellipsis fa-2x" />
                </div>
              </div>

              <div className="feeds-img">
                <img
                  src="/images/kyusung/westagramPuppy.jpg"
                  alt="my Article"
                />
              </div>
              <div className="feeds-img-info">
                <div className="feeds-info-img">
                  <i className="fa-regular fa-heart fa-2x" />
                  <i className="fa-regular fa-comment fa-2x" />
                  <i className="fa-regular fa-bookmark fa-2x" />
                </div>
                <div className="likes">
                  <div className="blankImage" />
                  <p>
                    <span className="author">Voyage_dev</span>님 외
                    <span className="countLikes">10</span>명이 좋아합니다
                  </p>
                </div>
                <ul className="comments">
                  <li>
                    <span>chlrbtjd</span>
                    <p>여긴 어디? 나는 누구?...</p>
                    <div className="comments-right-info">
                      <button className="deleteComments">삭제</button>
                      <i className="fa-regular fa-heart" />
                    </div>
                  </li>
                </ul>
                {commentArray.map((data, index) => (
                  <ul className="comments" key={index}>
                    <li>
                      <span>{data.id}</span>
                      <p>{data.comment}</p>
                      <div className="comments-right-info">
                        <button className="deleteComments">삭제</button>
                        <i className="fa-regular fa-heart" />
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
              <form id="instaForm">
                <input
                  id="username"
                  type="text"
                  placeholder="사용자 아이디를 입력하세요!"
                  onChange={e => getUserId(e.target.value)}
                />
                <input
                  id="userComments"
                  type="text"
                  placeholder="댓글 달기!"
                  onChange={e => getUserComment(e.target.value)}
                />
                <button id="submit" onClick={handleCommentEnter}>
                  제출
                </button>
              </form>
            </article>
          </div>

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
                <div className="story-info">
                  <div className="story-circle" />
                  <div className="story-info-el">
                    <p>voyage</p>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="story-info">
                  <div className="story-circle" />
                  <div className="story-info-el">
                    <p>wecode</p>
                    <span>4시간전</span>
                  </div>
                </div>
                <div className="story-info">
                  <div className="story-circle" />
                  <div className="story-info-el">
                    <p>chlrbtjd</p>
                    <span>1시간전</span>
                  </div>
                </div>
                <div className="story-info">
                  <div className="story-circle" />
                  <div className="story-info-el">
                    <p>coding</p>
                    <span>40분전</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Main;
