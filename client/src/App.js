import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import usersUtils from "./utils/usersUtils";
import likesUtils from "./utils/likesUtils";
import bookmarksUtils from "./utils/bookmarksUtils";
import followsUtils from "./utils/followsUtils";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";
import ActivityPage from "./pages/ActivityPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import CommentsPage from "./pages/CommentsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

export default (props) => {
    const [loggedUser, setLoggedUser] = React.useState(null);

    React.useEffect(() => {
        if (localStorage.getItem("auth")) {
            usersUtils.logUser(localStorage.getItem("auth")).then((response) => {
                let userData = response.data;

                userData["likes"] = likesUtils.getLikesByUserId(userData.id);

                userData["bookmarks"] = bookmarksUtils.getBookmarksByUserId(userData.id);

                userData["follows"] = followsUtils.getFollowsByUserId(userData.id);

                setLoggedUser(userData);
            });
        } else {
            setLoggedUser(null);
        }
    }, []);

    return (
        <div className='App'>
            <BrowserRouter>
                <Switch className='App'>
                    <Route exact path='/' render={() => <HomePage {...props} loggedUser={loggedUser} />} />
                    <Route path='/register' component={() => <RegisterPage loggedUser={loggedUser} />} />
                    <Route path='/login' component={() => <LoginPage loggedUser={loggedUser} />} />
                    <Route path='/search' component={() => <SearchPage {...props} loggedUser={loggedUser} />} />
                    <Route path='/createpost' component={() => <CreatePostPage {...props} />} loggedUser={loggedUser} />
                    <Route path='/activity' component={() => <ActivityPage {...props} loggedUser={loggedUser} />} />
                    <Route path='/profile' component={() => <ProfilePage {...props} loggedUser={loggedUser} />} />
                    <Route
                        path='/edit-profile'
                        component={() => <EditProfilePage {...props} loggedUser={loggedUser} />}
                    />
                    <Route path='/comments' component={() => <CommentsPage {...props} loggedUser={loggedUser} />} />
                    <Route path='/post/:id' component={() => <PostPage {...props} loggedUser={loggedUser} />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
