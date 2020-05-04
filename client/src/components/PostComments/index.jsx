import React from "react";
import "./style.css";
import commentsUtils from "../../utils/commentsUtils";
import { Link } from "react-router-dom";

import AddComment from "../AddComment";

export default (props) => {
  const [comments, setComments] = React.useState(null);

  React.useEffect(() => {
    setComments(commentsUtils.getCommentsByPostId(props.post_id));
  }, [props.post_id]);

  return comments ? (
    <>
      <Link
        className='commentsLink'
        to={{
          pathname: "/comments",
          state: {
            comments,
          },
        }}
      >
        <span className='textLabelFaded unselectableText'>
          {comments.length === 1
            ? "View comment"
            : "View all " + comments.length + " comments"}
        </span>
      </Link>
      <AddComment loggedUser={props.loggedUser} post_id={props.post_id} />
    </>
  ) : (
    <></>
  );
};
