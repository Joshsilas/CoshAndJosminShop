import React, {useEffect, useState} from "react";
import './Searchbar.css'

const SearchBar = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const performSearch = (e) => {
        setSearchTerm(e.target.value)
    };

    useEffect(() => {
        handleSearch(searchTerm);
}, [searchTerm, handleSearch]);


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
    )
}
export default SearchBar