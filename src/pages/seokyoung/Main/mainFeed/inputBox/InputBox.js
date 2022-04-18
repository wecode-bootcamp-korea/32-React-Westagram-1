import React from "react";

const InputBox = props => {
  console.log(props.inputChange);
  return (
    <form className="commentInputBox" onSubmit={props.addComment}>
      <img src="images/seokyoung/smile.png" alt="이모티콘" />
      <input
        className="commentInput"
        type="text"
        placeholder="댓글 달기"
        onChange={props.inputChange}
        value={props.inputValue}
      />
      <button className="commentBtn">게시</button>
    </form>
  );
};

export default InputBox;
