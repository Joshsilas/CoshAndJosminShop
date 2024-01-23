import './NavBar.css';
import CategoryMenu from "../Category Menu/index.jsx";
import SearchBar from "../SearchBar/index.jsx";
import CartButton from "../Cart Button/index.jsx";
import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "../Button/index.jsx";

const NavBar = ({ handleSearch, handleClearClick, clearSearchBar }) => {
    const navigate = useNavigate();

    const clickOnButton = () => {
        navigate(`/LogInPage/`);
    };

    return (
        <div>
            <nav className="navBar">
                <p className="welcomeLogo">Cosh And Josmin</p>
                <CategoryMenu text="Categories" menuItems={['categories']} handleClearClick={handleClearClick} />
                <SearchBar handleSearch={handleSearch} handleClearClick={handleClearClick} clearSearchBar={clearSearchBar} />
                <Button className="logInButton" text="Log In" onClick={clickOnButton} />
                <CartButton text="Add to cart" />
            </nav>
        </div>
    );
};

export default NavBar;