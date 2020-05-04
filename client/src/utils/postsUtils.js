import posts from "../fictive_data/posts";

export default {
    getPostsByUserList: (userList) => {
        let result = [];

        posts.forEach(post => {
            userList.forEach(user => {
                if (post.user_id === user)
                    result.push(post);
            });
        });

        return result;
    }
};