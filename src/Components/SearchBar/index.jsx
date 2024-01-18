import React, { useState, useEffect } from "react";
import './SearchBar.css';

const SearchBar = ({ handleSearch, handleClearClick, clearSearchBar }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const performSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, handleSearch]);

    useEffect(() => {
        if (clearSearchBar) {
            setSearchTerm("");
            handleClearClick();
        }
    }, [clearSearchBar, handleClearClick]);

    return (
        <>
            <form>
                <input
                    className='search'
                    type='input'
                    placeholder="What would you like to find"
                    value={searchTerm}
                    onChange={performSearch}
                />
            </form>
        </>
    );
};

export default SearchBar;