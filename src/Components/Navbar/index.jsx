import './NavBar.css';
import CategoryMenu from "../Category Menu/index.jsx";
import SearchBar from "../SearchBar/index.jsx";
import CartButton from "../Cart Button/index.jsx";
import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/index.jsx";
import UserContext from "../UserContext/index.jsx";

const NavBar = ({ handleSearch, handleClearClick, clearSearchBar, displayLoggedIn }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const user = useContext(UserContext);

    useEffect(() => {
        setLoggedIn(displayLoggedIn);
    }, [displayLoggedIn]);

    const clickOnButton = () => {
        navigate(`/LogInPage/`);
        handleClearClick();
    };

    return (
        <div>
            <nav className="navBar">
                <p className="welcomeLogo">Cosh And Josmin</p>
                <CategoryMenu text="Categories" menuItems={['categories']} handleClearClick={handleClearClick} />
                <SearchBar handleSearch={handleSearch} handleClearClick={handleClearClick} clearSearchBar={clearSearchBar} />
                <div>
                    <Button className="logInButton" text="Log In" onClick={clickOnButton} />
                    {loggedIn ? (
                        <>
                            <p>Welcome {displayLoggedIn}</p>
                        </>
                    ) : (
                        <>
                            <p>Welcome Guest</p>
                        </>
                    )}
                </div>
                <CartButton text="Add to cart" />
            </nav>
        </div>
    );
};

export default NavBar;