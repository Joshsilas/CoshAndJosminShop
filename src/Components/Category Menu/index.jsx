import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './CategoryMenu.css';

const CategoryMenu = ({ text, category }) => {
    const url = 'https://fakestoreapi.com/products/categories';
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch(url);
            const categories = await response.json();
            setCategories(categories);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const [isOpen, setIsOpen] = useState(false);
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
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link className="List" to={`/category/${category.toLowerCase()}`}>{category.toUpperCase()}</Link>
                        </li>
                    ))}
                    <li>
                        <Link className="List" to="/">HOME PAGE</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default CategoryMenu;