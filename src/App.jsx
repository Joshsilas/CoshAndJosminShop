import './App.css'
import CategoryPage from './Components/CategoryPage';
import CategoryMenu from "./Components/Category Menu/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import './App.css'
import HomePage from "./Components/HomePage/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./Components/ProductPage/index.jsx";
import SearchBar from "./Components/SearchBar/index.jsx";

function App() {
    const handleSearch = (searchTerm) => {

        console.log('Search term:', searchTerm);
    }
  return (
    <BrowserRouter>
        <Navbar />
        <SearchBar handleSearch={handleSearch}/>
        <Routes>
            <Route path={"/"} element={<HomePage/>} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path='/product-page/:id' element={<ProductPage/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
