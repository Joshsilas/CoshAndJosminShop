import './NavBar.css';
import CategoryMenu from "../Category Menu/index.jsx";
import SearchBar from "../SearchBar/index.jsx";
import CartButton from "../Cart Button/index.jsx";
import React from "react";

const NavBar = ({ handleSearch, handleClearClick }) => {
    return (
        <div>
            <nav className="navBar">
                <p className="welcomeLogo">Cosh And Josmin</p>
                <CategoryMenu text="Categories" menuItems={['categories']} />
                <SearchBar handleSearch={handleSearch} handleClearClick={handleClearClick} />
                <CartButton text="Add to cart" />
            </nav>
        </div>
    );
};

export default NavBar;