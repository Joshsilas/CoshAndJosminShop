import './LogInPage.css'
import InputForms from "../InputForms/index.jsx";
import Button from "../Button/index.jsx";
import React from "react";

const LogInPage = () => {
    return (
        <>
            <p className="signInMessage">Please enter your email and password to sign in</p>
            <InputForms className="logInforms" placeholder={"Email address"}/>
            <InputForms className="logInforms" placeholder={"Password"}/>
            <Button className="signInButton" text="Sign In" />
        </>
    )
}
export default LogInPage