import React from "react";
import "./style.css";
import path from "path";
import usersUtils from "../../utils/usersUtils";
import graphics from "../../graphics/icons";

import UserImage from "../UserImage";
import PostContent from "../PostContent";
import PostActions from "../PostActions";
import PostViews from "../PostViews";
import PostLikes from "../PostLikes";
import PostComments from "../PostComments";
import Comment from "../Comment";

export default (props) => {
  const [username, setUsername] = React.useState(null);

  React.useEffect(() => {
    setUsername(usersUtils.getUsernameByUserId(props.post.user_id));
  }, [props.post.user_id]);

  return (
    <div className='postContainer'>
      <div className='postHeader'>
        <div className='userInfo'>
          <UserImage user_id={props.post.user_id} size={1} />
          {username ? <span className='username'>{username}</span> : <></>}
        </div>
        <svg viewBox='0 0 24 24' fill='black' className='menuIcon'>
          <path d={graphics.menu} />
        </svg>
      </div>
      <hr className='lineSeparator' />
      <PostContent post_id={props.post.id} loggedUser={props.loggedUser} />
      <div className='utilsContainer'>
        <PostActions post_id={props.post.id} loggedUser={props.loggedUser} />
        <PostViews post={props.post} loggedUser={props.loggedUser} />
        <PostLikes post={props.post} loggedUser={props.loggedUser} />
        {props.post.caption ? (
          <Comment
            user_id={props.post.user_id}
            username={username}
            text={props.post.caption}
            loggedUser={props.loggedUser}
          />
        ) : (
          <></>
        )}
        <PostComments post_id={props.post.id} loggedUser={props.loggedUser} />
      </div>
    </div>
  );
};
