import React from "react";

function CommentLogoBox() {
  return (
    <>
      <div className="commentLogoBox">
        <img
          className="navLogo"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="좋아요"
        />
        <img className="navLogo" src="images/seokyoung/chat.png" alt="채팅" />
        <img className="navLogo" src="images/seokyoung/send.png" alt="메시지" />
        <img
          className="navLogo rightLogo"
          src="images/seokyoung/bookmark-white.png"
          alt="저장"
        />
      </div>
      <div className="likes">좋아요 623개</div>
      <div className="commentId">heaundea_DDol</div>
      <p className="commentContent">똘이 너무 귀엽죠?</p>
      <p className="comments">댓글 271개 모두 보기</p>
    </>
  );
}

export default CommentLogoBox;
