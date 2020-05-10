import React from "react";
import "./style.css";

import usersUtils from "../../utils/usersUtils";

export default (props) => {
    const handleLogin = (event) => {
        event.preventDefault();

        const loginEmail = document.querySelector("#loginEmail");
        const loginPassword = document.querySelector("#loginPassword");

        if (loginEmail.value && loginPassword.value)
            usersUtils
                .authenticateUser(loginEmail.value, loginPassword.value)
                .then((response) => {
                    localStorage.setItem("auth", response.data);
                    alert("Successfully logged in.");
                    window.location.href = "/";
                })
                .catch((error) => {
                    alert("Credentials do not match.");
                });
    };

    return (
        <form className='inputForm' onSubmit={handleLogin}>
            <input className='singleInputField' id='loginEmail' type='Email' placeholder='Email' />
            <input className='singleInputField' id='loginPassword' type='Password' placeholder='Password' />
            <input type='submit' value='Login' />
        </form>
    );
};
