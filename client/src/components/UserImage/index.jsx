import React from "react";
import "./style.css";
import path from "path";

export default (props) => {
  const imageStyles = {
    borderRadius: "9999px",
    width: 30 * props.size + "px",
    height: 30 * props.size + "px",
  };

  return (
    <img
      src={path.join(__dirname, "content", "user", props.user_id + ".jpg")}
      style={imageStyles}
      alt='userImage'
    />
  );
};
