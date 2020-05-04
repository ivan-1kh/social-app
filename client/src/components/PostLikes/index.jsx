import React from "react";
import "./style.css";
import likesUtils from "../../utils/likesUtils";

export default (props) => {
  const [likes, setLikes] = React.useState(null);

  React.useEffect(() => {
    setLikes(
      likesUtils
        .getLikesByPostId(props.post.id)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  }, [props.post.id]);

  return (
    likes && (
      <span className='textLabelBold unselectableText'>
        {likes + (likes !== "1" ? " likes" : " like")}
      </span>
    )
  );
};
