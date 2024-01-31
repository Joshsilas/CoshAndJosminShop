import React, {useContext, useEffect, useState} from 'react';
import InputForms from "../InputForms/index.jsx";
import { useNavigate } from 'react-router-dom';
import UserContext from "../UserContext/index.jsx";

import './LogInPage.css';
import Button from "../Button/index.jsx";

const LogInPage = ({ setLoggedIn }) => { // Pass setLoggedIn as a prop
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
    }

        useEffect(() => {
            const handleKeyPress = (event) => {
                if (event.key === 'Enter') {
                    // Trigger login when Enter key is pressed
                    handleLogin();
                }
            };
            document.addEventListener('keydown', handleKeyPress);

            return () => {
                document.removeEventListener('keydown', handleKeyPress);
            };
        }, [handleLogin]);

    console.log(users.username)

        return (
            <>
                <p className="signInMessage">Please enter your username and password to sign in</p>
                <InputForms
                    id="userNameForm"
                    className="logInforms"
                    placeholder={"Username"}
                    value={userName}
                    onChange={(newValue) => setUsername(newValue)}
                />
                <InputForms
                    id="PasswordForm"
                    className="logInforms"
                    placeholder={"Password"}
                    type="password"
                    value={password}
                    onChange={(newValue) => setPassword(newValue)}
                />
                <Button className="signInButton" text="Sign In" onClick={handleLogin}/>
            </>
        );
    };


export default LogInPage;