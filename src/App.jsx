import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/index.jsx";
import HomePage from "./Components/HomePage/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import CategoryPage from "./Components/CategoryPage";
import ProductPage from "./Components/ProductPage/index.jsx";
import SearchBar from "./Components/SearchBar/index.jsx";
import SearchResults from "./Components/SearchResults/index.jsx";
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const products = await response.json();
                setData(products);
            } catch (err) {
                console.log(err);
            }
        };

        fetchProducts();
    }, []);

    const handleProductClick = () => {
        console.log("Product clicked");
        setSearchTerm('');
    };

    return (
        <BrowserRouter>
            <Navbar handleSearch={handleSearch}  />
            {searchTerm && <SearchResults data={data} searchTerm={searchTerm} />}
            {!searchTerm && <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path='/product-page/:id' element={<ProductPage />} />
            </Routes>}
            <Footer />
        </BrowserRouter>
    );
}

export default App;