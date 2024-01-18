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
        <div className={`category-menu ${isOpen ? 'open' : ''}`}>
            <button className='catButton' onClick={toggleMenu}>
                <img className="barsImage" src='/src/assets/bars-solid.svg' alt="BarsLogo" />
                {text}
                <img className={`closeImage ${!isOpen ? 'open' : ''}`} src='/src/assets/x-solid.svg' alt="Close" />
            </button>
            {isOpen && (
                <ul className="sidebar-list">
                    <li>
                        <Link className="List" to="/" onClick={handleCategoryClick}>HOME PAGE</Link>
                    </li>
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link className="List" to={`/category/${category.toLowerCase()}`} onClick={handleCategoryClick}>{category.toUpperCase()} </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryMenu;