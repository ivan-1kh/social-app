import React from "react";
import "./style.css";

export default (props) => {
  const [views, setViews] = React.useState(null);

  React.useEffect(() => {
    setViews(props.post.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  }, [props.post.views]);

  return (
    views && (
      <span className='textLabelBold unselectableText'>
        {views + (views !== "1" ? " views" : " view")}
      </span>
    )
  );
};
