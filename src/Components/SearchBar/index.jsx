import React, { useEffect, useState } from "react";
import './Searchbar.css';
import ProductContainer from "../ProductContainer/index.jsx";

const SearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);

    const url = 'https://fakestoreapi.com/products';

    const fetchProducts = async () => {
        try {
            const response = await fetch(url);
            const products = await response.json();
            setData(products);
        } catch (err) {
            console.log(err);
        }
    };

    const performSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        fetchProducts(); // Fetch products when the component mounts
    }, []);

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
            {searchTerm !== "" &&
                data
                    .filter((product) => {
                        if (searchTerm === "") {
                            return true;
                        } else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return true;
                        }
                        return false;
                    })
                    .map((product) => (
                        <div className="single-product" key={product.id}>
                            <ProductContainer {...product} />
                        </div>
                    ))}
        </>
    );
};

export default SearchBar