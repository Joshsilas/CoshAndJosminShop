import './NavBar.css'
import CategoryMenu from "../Category Menu/index.jsx";
import SearchBar from "../Search Bar/index.jsx";
import CartButton from "../Cart Button/index.jsx";

const NavBar = () => {

    return (
        <div>
            <nav className="navBar">
                <p>Cosh And Josmin</p>
                <CategoryMenu />
                <SearchBar/>
                <CartButton />
            </nav>
        </div>
    )
}

export default NavBar