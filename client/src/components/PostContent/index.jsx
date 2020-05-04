import React from "react";
import "./style.css";
import { loadContent } from "../../utils/userContent";

export default (props) => {
  const [content, setContent] = React.useState([]);

  React.useEffect(() => {
    setContent(loadContent(props.post_id));
  }, [props.post_id]);

  return content ? (
    <img
      src={content ? content : null}
      alt='content'
      className='contentCanvas'
    />
  ) : (
    <></>
  );
};
