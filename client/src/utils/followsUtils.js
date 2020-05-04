import followers from "../fictive_data/followers";

export default {
    getFollowsByUserId: (user_id) => {
        let result = [];
        followers.forEach(follow => {
            if (follow.follower_id === user_id)
                result.push(follow.user_id);
        });
        return result;
    }
}