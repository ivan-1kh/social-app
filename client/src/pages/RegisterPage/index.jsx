import React from "react";

import usersUtils from "../../utils/usersUtils";

export default (props) => {
    const [usersValidation, setUsersValidation] = React.useState(null);

    React.useEffect(() => {
        usersUtils.getUsersValidation().then((response) => {
            let obj = {};
            Object.keys(response.data).forEach(
                (key) => (obj[key] = new RegExp(response.data[key].split("/")[1], response.data[key].split("/")[2]))
            );
            setUsersValidation(obj);
        });
    }, []);

    const handleRegister = (event) => {
        event.preventDefault();

        const registerFirstName = document.querySelector("#registerFirstName");
        const registerLastName = document.querySelector("#registerLastName");
        const registerEmail = document.querySelector("#registerEmail");
        const registerPassword = document.querySelector("#registerPassword");
        const registerConfirmPassword = document.querySelector("#registerConfirmPassword");

        if (!usersValidation) return;

        if (
            !usersValidation.firstName.test(registerFirstName.value) ||
            !usersValidation.lastName.test(registerLastName.value) ||
            !usersValidation.email.test(registerEmail.value) ||
            !usersValidation.password.test(registerPassword.value) ||
            registerPassword.value !== registerConfirmPassword.value
        ) {
            alert("Client-Side Validation: Check the fields");
            return;
        }

        usersUtils
            .registerUser(registerFirstName.value, registerLastName.value, registerEmail.value, registerPassword.value)
            .then((response) => {
                if (response.data === "fail") {
                    alert("Registration failed");
                } else {
                    localStorage.setItem("auth", response.data);
                    alert("Registered successfully");
                    window.location.href = "/";
                }
            })
            .catch((error) => {
                alert("Registration failed");
            });
    };

    return (
        <>
            <form className='inputForm' onSubmit={handleRegister}>
                <input className='singleInputField' id='registerFirstName' type='text' placeholder='First Name' />
                <input className='singleInputField' id='registerLastName' type='text' placeholder='Last Name' />
                <input className='singleInputField' id='registerEmail' type='email' placeholder='Email' />
                <input className='singleInputField' id='registerPassword' type='password' placeholder='Password' />
                <input
                    className='singleInputField'
                    id='registerConfirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                />
                <input type='submit' value='Register' />
            </form>
        </>
    );
};
