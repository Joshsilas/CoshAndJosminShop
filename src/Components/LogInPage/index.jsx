import React, { useState } from 'react';
import InputForms from "../InputForms/index.jsx";
import Button from "../Button/index.jsx";
import {  useNavigate } from 'react-router-dom';

import './LogInPage.css';

const LogInPage = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const clickOnButton = () => {
        navigate(`/`);
        handleClearClick();
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: "userName",
                    password: "password",
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                navigate(`/`);

            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData.message);
                alert("LoginFailed")
            }
        } catch (error) {
            console.error('Error during login:');
            // Handle other errors
            alert("fail")
        }
    };


    return (
        <>
            <p className="signInMessage">Please enter your username and password to sign in</p>
            <InputForms
                className="logInforms"
                placeholder={"Username"}  // Updated placeholder
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
            />
            <InputForms
                className="logInforms"
                placeholder={"Password"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="signInButton" text="Sign In" onClick={handleLogin} />
        </>
    );
};

export default LogInPage;