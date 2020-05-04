import React from "react";
import "./style.css";
import postsUtils from "../../utils/postsUtils";

import Navigation from "../../components/Navigation";
import Post from "../../components/Post";

export default (props) => {
  const [loadedPosts, setLoadedPosts] = React.useState([]);

  React.useEffect(() => {
    if (props.loggedUser)
      setLoadedPosts(postsUtils.getPostsByUserList(props.loggedUser.follows));
  }, [props.loggedUser]);

  return (
    <>
      <div className='feedContainer'>
        {loadedPosts
          .slice(
            0,
            10
          ) /*REMOVE THIS, SLICING TO MAKE LIST SHORT!!!!!!!!!!!!!!!*/
          .map((post) => (
            <Post key={post.id} post={post} loggedUser={props.loggedUser} />
          ))}
      </div>
      <Navigation loggedUser={props.loggedUser} />
    </>
  );
};
