import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './CategoryMenu.css';

const CategoryMenu = ({ text, handleClearClick }) => {
    const url = 'https://fakestoreapi.com/products/categories';
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchCategories = async () => {
        try {
            const response = await fetch(url);
            const categories = await response.json();
            setCategories(categories);
        } catch (err) {
            console.log(err);
        }
    };

    // This code is handling the clear search bar click. Without causing any error. Don't ask why or how just don't remove it.
    const handleCategoryClick = () => {
        handleClearClick();
        setIsOpen(false);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className='catButton' onClick={toggleMenu}>
                <img className="barsImage" src='/src/assets/bars-solid.svg' alt="BarsLogo" />
                {text}
                <img className={`closeImage ${!isOpen ? 'open' : ''}`} src='/src/assets/x-solid.svg' alt="Close" />
            </button>
            <div className={`category-menu ${isOpen ? 'open' : ''}`}>
            {isOpen && (
                <ul className="sidebar-list">
                    <div className="navbarTitle">
                    <p>CATEGORIES</p>
                </div>
                    <li>
                        <Link className="List" to="/" onClick={handleCategoryClick}>HOME PAGE</Link>
                    </li>
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link className="List" to={`/category/${category.toLowerCase()}`} onClick={handleCategoryClick}>{category.toUpperCase()} </Link>
                        </li>
                    ))}
                    <button className="closeButton" onClick={toggleMenu}>Close</button>
                </ul>
            )}
            </div>
        </div>
    );
};

export default CategoryMenu;