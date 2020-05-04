import likes from "../fictive_data/likes";

export default {
    getLikesByUserId: (user_id) => {
        let result = [];
        likes.forEach(like => {
            if (like.user_id === user_id)
                result.push(like.post_id);
        });
        return result;
    },
    removeLike: (user_id, post_id) => {
        //Make request to backend to remove the entry.
    },
    addLike: (user_id, post_id) => {
        //Make request to backend to add the entry.
    },
    getLikesByPostId: (post_id) => {
        let result = 0;
        likes.forEach(like => {
            if (like.post_id === post_id)
                result++;
        })
        return result;
    }
}