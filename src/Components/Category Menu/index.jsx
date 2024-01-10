import {useState} from "react";
import './CategoryMenu.css';


const CategoryMenu = ({ text, menuItems }) => {
        const [isOpen, setIsOpen] = useState(false);
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        return (
            <>
                <button className = 'catButton' onClick={toggleMenu}><img className="barsImage" src='src/assets/bars-solid.svg' alt="BarsLogo" />{text}</button>
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