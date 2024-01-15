import './NavBar.css'
import CategoryMenu from "../Category Menu/index.jsx";
import SearchBar from "../SearchBar/index.jsx";
import CartButton from "../Cart Button/index.jsx";

    const NavBar = ({ updateSearchResults }) => {
        const handleSearch = (searchTerm) => {
            console.log('Search term:', searchTerm);
            // Call the updateSearchResults function passed from the App component
            updateSearchResults(searchTerm);
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