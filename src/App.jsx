import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/index.jsx";
import HomePage from "./Components/HomePage/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import CategoryPage from "./Components/CategoryPage";
import ProductPage from "./Components/ProductPage/index.jsx";
import SearchResults from "./Components/SearchResults/index.jsx";
import UserProvider from "./Components/UserProvider/index.jsx";
import LogInPage from "./Components/LogInPage/index.jsx";
import CartPage from "./Components/CartPage/index.jsx";
import SalesPage from "./Components/SalesPage/index.jsx";
import GiftsPage from "./Components/GiftsPage/index.jsx";
import PaymentPage from "./Components/PaymentPage/index.jsx";
import AddressDetails from "./Components/AddressDetails/index.jsx";
import ThankYouScreen from "./Components/ThankyouScreen/index.jsx";


function App() {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [clearSearchBar, setClearSearchBar] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [cartProducts, setCartProducts] = useState([])
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

    const addToCart = (product, selectedQuantity) => {
        const quantityToAdd = parseInt(selectedQuantity, 10);
        const existingProductIndex = cartProducts.findIndex(p => p.id === product.id);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cartProducts];
            updatedCart[existingProductIndex].quantity += quantityToAdd;
            setCartProducts(updatedCart);
        } else {
            setCartProducts([...cartProducts, { ...product, quantity: quantityToAdd }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartProducts(cartProducts.map(product => {
            if (product.id === productId) {
                return { ...product, quantity: product.quantity - 1 };
            } else {
                return product;
            }
        }).filter(product => product.quantity > 0));
    };

    const clearCart = () => {
        setCartProducts([])
    }

    return (
        <BrowserRouter>
            <UserProvider>
                <Navbar
                    handleSearch={handleSearch}
                    handleClearClick={handleClearSearch}
                    clearSearchBar={clearSearchBar}
                    displayLoggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    cartProducts={cartProducts}
                />
                {searchTerm && <SearchResults data={data} searchTerm={searchTerm} clearSearchBar={clearSearchBar}  handleClearClick={handleClearSearch} />}
                {!searchTerm && <Routes>
                    <Route path={"/"} element={<HomePage clearSearchBar={clearSearchBar}  handleClearClick={handleClearSearch}/>}/>
                    <Route path="/category/:categoryName" element={<CategoryPage />} />
                    <Route path="/SalesPage/" element={<SalesPage />} />
                    <Route path="/GiftsPage/" element={<GiftsPage />} />
                    <Route path='/product-page/:id' element={<ProductPage addToCart={addToCart} handleClearClick={handleClearSearch}/>} />
                    <Route path="/LogInPage/" element={<LogInPage setLoggedIn={setLoggedIn} />}/>
                    <Route path='/cart-page/'  element={<CartPage cartProducts={cartProducts} removeFromCart={removeFromCart} clearSearchBar={clearSearchBar} handleClearClick={handleClearSearch}/>}/>
                    <Route path="/AddressPage/" element={<AddressDetails cartProducts={cartProducts} />}/>
                    <Route path="/PaymentPage/" element={<PaymentPage cartProducts={cartProducts} clearCart={clearCart} />}/>
                    <Route path="/ThankYouPage/" element={<ThankYouScreen />}/>
                </Routes>}
                <Footer />
            </UserProvider>
        </BrowserRouter>
    );

}

export default App;