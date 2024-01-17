import React, { useState, useEffect } from "react";
import './SearchBar.css';

const SearchBar = ({ handleSearch, handleClearClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const performSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };

    const handleFormClick = () => {
        handleClearClick();
        setSearchTerm('');
    };

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, handleSearch]);

    return (
        <form>
            <input
                className='search'
                type='input'
                placeholder="What would you like to find"
                value={searchTerm}
                onChange={performSearch}
                onClick={handleFormClick}
            />
        </form>
    );
};

export default SearchBar;