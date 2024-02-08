
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/index.jsx";
import HomePage from "./Components/HomePage/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import CategoryPage from "./Components/CategoryPage";
import ProductPage from "./Components/ProductPage/index.jsx";
import SearchResults from "./Components/SearchResults/index.jsx";
import './App.css';
import UserDisplay from "./Components/UserDisplay/index.jsx";
import UserProvider from "./Components/UserProvider/index.jsx";
import LogInPage from "./Components/LogInPage/index.jsx";
import CartContext from "./Components/CartContext/index.jsx";

function App() {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [clearSearchBar, setClearSearchBar] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handleClearSearch = () => {
        setClearSearchBar(true);
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

    useEffect(() => {
        if (clearSearchBar) {
            setClearSearchBar(false);
        }
    }, [clearSearchBar]);

    return (
        <BrowserRouter>
            <UserProvider>
                <CartContext>
                <Navbar
                    handleSearch={handleSearch}
                    handleClearClick={handleClearSearch}
                    clearSearchBar={clearSearchBar}
                    displayLoggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                />
                {searchTerm && <SearchResults data={data} searchTerm={searchTerm} clearSearchBar={clearSearchBar}  handleClearClick={handleClearSearch} />}
                {!searchTerm && <Routes>
                    <Route path={"/"} element={<HomePage clearSearchBar={clearSearchBar}  handleClearClick={handleClearSearch}/>}/>
                    <Route path="/category/:categoryName" element={<CategoryPage />} />
                    <Route path='/product-page/:id' element={<ProductPage   handleClearClick={handleClearSearch}/>} />
                    <Route path="/LogInPage/" element={<LogInPage setLoggedIn={setLoggedIn} />} />
                </Routes>}
                <Footer />
                {/*<UserDisplay />*/}
                </CartContext>
            </UserProvider>
        </BrowserRouter>
    );

}

export default App;