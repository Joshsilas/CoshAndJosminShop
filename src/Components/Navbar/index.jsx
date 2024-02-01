import './NavBar.css';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/index.jsx';
import CategoryMenu from '../Category Menu/index.jsx';
import SearchBar from '../SearchBar/index.jsx';
import CartButton from '../Cart Button/index.jsx';
import UserContext from '../UserContext/index.jsx';

const NavBar = ({ handleSearch, handleClearClick, clearSearchBar, displayLoggedIn }) => {
    const [loggedIn, setLoggedIn] = useState(displayLoggedIn);
    const navigate = useNavigate();
    const user = useContext(UserContext);

    const clickOnButton = async () => {
        if (loggedIn) {
            setLoggedIn(false);  // Log out when the button is clicked
            await new Promise(resolve => setTimeout(resolve, 0));
            alert('You have successfully been logged out');
            localStorage.clear()
            window.location.reload();
        } else {
            navigate('/LogInPage/');
            handleClearClick();
            localStorage.clear()
        }
    };

    useEffect(() => {
        setLoggedIn(displayLoggedIn);
    }, [displayLoggedIn]);

    const storedUsername = localStorage.getItem('loggedInUser')

    return (
        <div>
            <nav className="navBar">
                <p className="welcomeLogo">Cosh And Josmin</p>
                <CategoryMenu text="Categories" menuItems={['categories']} handleClearClick={handleClearClick} />
                <SearchBar handleSearch={handleSearch} handleClearClick={handleClearClick} clearSearchBar={clearSearchBar} />
                <div>
                    <button className="logInButton" onClick={clickOnButton}>
                        {loggedIn ? 'Log Out' : 'Log In'}
                    </button>
                    {loggedIn ? <p className="welcomeText">Welcome { JSON.parse(storedUsername) || user.username.replace(/['"]/g,  '')}</p >
                        : <p className="welcomeText">Welcome Guest</p>}
                </div>

                <CartButton text="Add to cart" />
            </nav>
        </div>
    );
};

export default NavBar;