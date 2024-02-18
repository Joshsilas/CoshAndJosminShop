import React, {useContext, useEffect, useState} from 'react';
import InputForms from "../InputForms/index.jsx";
import { useNavigate } from 'react-router-dom';
import UserContext from "../UserContext/index.jsx";
import './LogInPage.css';
import Button from "../Button/index.jsx";

const LogInPage = ({ setLoggedIn }) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const users = useContext(UserContext);

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            setLoggedIn(true);
            navigate("/");
        }
    }, [setLoggedIn, navigate]);

    console.log(localStorage.getItem('loggedInUser'))

    const handleLogin = () => {
        const user = users.find(u => u.username === userName);

        if (user && user.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(user.username));
            alert(`Welcome ${userName}`);

            setLoggedIn(true);
            navigate("/");
        } else {
            console.error('Login failed for user:', userName);
            alert('Wrong username or password. Please try again.');
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                handleLogin();
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleLogin]);

    return (
        <>
            <div className="signInMessage">
                <p>Please enter your username</p>
                <p>and password</p>
            </div>
            <div className="loginFormsDisplay">
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
            <Button className="signInButton" text="Sign In" onClick={handleLogin} />
            </div>
        </>
    );
};

export default LogInPage;