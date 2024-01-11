import './NavBar.css'
import CategoryMenu from "../Category Menu/index.jsx";
import SearchBar from "../Search Bar/index.jsx";
import CartButton from "../Cart Button/index.jsx";

const NavBar = () => {

    return (
        <div>
            <nav className="navBar">
                <p className="welcomeLogo">Cosh And Josmin</p>
                <CategoryMenu text="Categories" menuItems={['Item 1', 'Item 2', 'Item 3', 'Item 4']} />
                <SearchBar/>
                <CartButton text="Add to cart" />
            </nav>
        </div>
    )
}

export default NavBar