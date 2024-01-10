import {useState} from "react";
import './CategoryMenu.css';


const CategoryMenu = ({ text, menuItems }) => {
        const [isOpen, setIsOpen] = useState(false);
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        return (
            <>
                <div className={`category-menu ${isOpen ? 'open' : ''}`}>
                <button className = 'catButton' onClick={toggleMenu}>
                    <img className="barsImage" src='src/assets/bars-solid.svg' alt="BarsLogo" />
                    {text}

                </button>
                {isOpen && (
                    <ul className="List">
                        {menuItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
                </div>
            </>
        );
    };


export default CategoryMenu