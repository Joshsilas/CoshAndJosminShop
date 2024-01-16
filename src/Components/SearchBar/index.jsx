import React, { useEffect, useState } from "react";
import './Searchbar.css';
import ProductContainer from "../ProductContainer/index.jsx";

const SearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const performSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };

    return (
        <form>
            <input
                className="search"
                type="input"
                placeholder="What would you like to find"
                value={searchTerm}
                onChange={performSearch}
            />
        </form>
    );
};

export default SearchBar;