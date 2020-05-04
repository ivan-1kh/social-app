import React from "react";
import "./style.css";

export default (props) => {
  return (
    <div className='commentContainer'>
      <span className='textLabelBold'>{props.username}</span>{" "}
      <span className='textLabel'>{props.text}</span>
    </div>
  );
};
