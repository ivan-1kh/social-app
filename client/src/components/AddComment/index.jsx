import React from "react";
import "./style.css";
import commentsUtils from "../../utils/commentsUtils";

import UserImage from "../UserImage";

export default (props) => {
  const handleTextChanged = (event) => {
    const postButton = document.getElementById("postButton" + props.post_id);
    if (event.target.value === "") {
      postButton.classList.add("textLabelBlueFaded");
    } else {
      postButton.classList.remove("textLabelBlueFaded");
    }
  };

  const handleSubmit = (event) => {
    const commentBox = document.getElementById(
      "commentTextBox" + props.post_id
    );

    if (commentBox.value === "" || !commentBox.value) return;

    commentsUtils.addComment(
      props.loggedUser.id,
      props.post_id,
      commentBox.value
    );

    commentBox.value = "";
    event.target.classList.add("textLabelBlueFaded");
  };

  return (
    <div className='postComment'>
      <UserImage
        loggedUser={props.loggedUser}
        size={0.9}
        user_id={props.loggedUser.id}
      />
      <input
        type='text'
        id={"commentTextBox" + props.post_id}
        className='commentTextBox'
        placeholder='Add a comment...'
        autocomplete='off'
        onChange={handleTextChanged}
        onSubmit={(e) => e.preventDefault()}
      />
      <span
        id={"postButton" + props.post_id}
        className='textLabelBlue textLabelBlueFaded'
        onClick={handleSubmit}
      >
        Post
      </span>
    </div>
  );
};
