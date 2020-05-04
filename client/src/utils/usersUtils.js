import users from "../fictive_data/users";
import axios from "axios";

export default {
    getUsernameByUserId: (user_id) => {
        let result = null;
        users.forEach((user) => {
            if (user_id === user.id) result = user.username;
        });
        return result;
    },
    getUsersValidation: () => {
        return axios.get(`/api/usersvalidation`);
    },
    authenticateUser: (email, password) => {
        return axios.post(`/api/authenticate`, {
            email,
            password,
            withCredentials: true,
        });
    },
    registerUser: (firstName, lastName, email, password) => {
        return axios.post(`/api/register`, {
            firstName,
            lastName,
            email,
            password,
            withCredentials: true,
        });
    },
    logUser: (token) => {
        return axios.get(`/api/loguser`, {
            headers: {
                token,
            },
        });
    },
};
