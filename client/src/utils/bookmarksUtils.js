import bookmarks from "../fictive_data/bookmarks";

export default {
    getBookmarksByUserId: (user_id) => {
        let result = [];
        bookmarks.forEach(bookmark => {
            if (bookmark.user_id === user_id)
                result.push(bookmark.post_id);
        })
        return result;
    },
    removeBookmark: (user_id, post_id) => {
        //Make request to backend to remove the entry.
    },
    addBookmark: (user_id, post_id) => {
        //Make request to backend to add the entry.
    }
};
