import {useState} from "react";
import './CategoryMenu.css';

const CategoryMenu = ({ text, menuItems }) => {
        const [isOpen, setIsOpen] = useState(false);
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        return (
            <>
                <button className = 'catButton' onClick={toggleMenu}>{text}</button>
                {isOpen && (
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </>
        );
    };


export default CategoryMenu