import React from "react";
import "./style.css";
import path from "path";
import likesUtils from "../../utils/likesUtils";
import bookmarksUtils from "../../utils/bookmarksUtils";
import graphics from "../../graphics/icons";

export default (props) => {
  const [liked, setLiked] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);

  React.useEffect(() => {
    if (props.loggedUser.likes.includes(props.post_id)) setLiked(true);
    if (props.loggedUser.bookmarks.includes(props.post_id)) setBookmarked(true);
  }, [props.loggedUser.bookmarks, props.loggedUser.likes, props.post_id]);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      likesUtils.removeLike(props.loggedUser.id, props.post_id);
    } else {
      setLiked(true);
      likesUtils.addLike(props.loggedUser.id, props.post_id);
    }
  };

  const handleBookmark = () => {
    if (bookmarked) {
      setBookmarked(false);
      bookmarksUtils.removeBookmark(props.loggedUser.id, props.post_id);
    } else {
      setBookmarked(true);
      bookmarksUtils.addBookmark(props.loggedUser.id, props.post_id);
    }
  };

  const handleShare = () => {};

  return (
    <div className='actionsContainer'>
      <svg
        viewBox='0 0 24 24'
        fill={liked ? "rgb(248, 96, 96)" : "black"}
        className='actionIcon'
        onClick={handleLike}
      >
        <path d={liked ? graphics.heart_filled : graphics.heart_outlined} />
      </svg>
      <svg
        viewBox='0 0 24 24'
        fill='black'
        className='actionIcon shareIcon'
        onClick={handleShare}
      >
        <path d={graphics.share_outlined} />
      </svg>
      <svg
        viewBox='0 0 24 24'
        fill='black'
        className='actionIcon bookmarkIcon'
        onClick={handleBookmark}
      >
        <path
          d={bookmarked ? graphics.bookmark_filled : graphics.bookmark_outlined}
        />
      </svg>
    </div>
  );
};
