import React from "react";

export default (props) => {
    const handleLogout = () => {
        localStorage.removeItem("auth");
        window.location.href = "/";
    };

    return (
        <div className='headerContainer'>
            {props.loggedUser ? (
                <>
                    <h1>Welcome back {props.loggedUser.first_name}!</h1>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <h1>
                    Welcome! <a href='/register'>Register</a> or <a href='/login'>Login</a>!
                </h1>
            )}
        </div>
    );
};
