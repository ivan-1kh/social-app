import comments from "../fictive_data/comments";

export default {
    getCommentsByPostId: (post_id) => {
        let result = [];
        comments.forEach(comment => {
            if (comment.post_id === post_id)
                result.push(comment);
        });
        return result;
    },
    addComment: (user_id, post_id, content) => {
        //Add comment to database!
    }
};