import React, { useContext, useState } from 'react';
import InputForms from "../InputForms/index.jsx";
import Button from "../Button/index.jsx";
import { useNavigate } from 'react-router-dom';
import UserContext from "../UserContext/index.jsx";

import './LogInPage.css';

const LogInPage = ({ displayLoggedIn }) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const users = useContext(UserContext);

    const handleLogin = () => {
        const user = users.find(u => u.username === userName);

        if (user && user.password === password) {
            console.log('Login successful for user:', userName);
            alert(`Welcome, ${userName}!`);
            setLoggedIn(true);
            navigate("/");
        } else {
            console.error('Login failed for user:', userName);
            alert('Wrong username or password. Please try again.');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        // Add any other logout logic here
    };


    return (
        <>
            <p className="signInMessage">Please enter your username and password to sign in</p>
            <InputForms
                className="logInforms"
                placeholder={"Username"}
                value={userName}
                onChange={(newValue) => setUsername(newValue)}
            />
            <InputForms
                className="logInforms"
                placeholder={"Password"}
                type="password"
                value={password}
                onChange={(newValue) => setPassword(newValue)}
            />
            <Button className="signInButton" text="Sign In" onClick={handleLogin} />
        </>
    );
};

export default LogInPage;