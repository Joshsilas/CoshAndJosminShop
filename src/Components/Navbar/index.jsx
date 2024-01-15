import './NavBar.css'
import CategoryMenu from "../Category Menu/index.jsx";
import SearchBar from "../Search Bar/index.jsx";
import CartButton from "../Cart Button/index.jsx";

const NavBar = () => {
    const handleSearch = (searchTerm) => {

        console.log('Search term:', searchTerm);
    }

    return (
        <div>
            <nav className="navBar">
                <p className="welcomeLogo">Cosh And Josmin</p>
                <CategoryMenu text="Categories" menuItems={['categories']} />
                <SearchBar handleSearch={handleSearch}/>
                <CartButton text="Add to cart" />
            </nav>
        </div>
    )
}

export default NavBar