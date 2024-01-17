import React, { useState, useEffect } from "react";
import './SearchResults.css';
import ProductContainer from "../ProductContainer/index.jsx";
import {Link} from "react-router-dom";

const SearchResults = ({ data: originalData, searchTerm }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const filteredData = originalData.filter((row) =>
            row.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredData);
    }, [originalData, searchTerm]);

    const handleLinkClick = () => {
        console.log("Product clicked");
        setSearchTerm('');
    };


    return (
        <div>
            <div className="searchLayout" >
            {searchTerm !== "" ? (
                data.length > 0 ? (
                    data.map((row) => (
                        <div className="search-product" key={row.id}>
                            <ProductContainer {...row} />
                        </div>
                    ))

                ) : (

                    <div className="ohNoMessage" >
                        <Link className="backToHomePageLink" to="/" onClick={handleLinkClick}>Back to home page </Link>
                    <p className="ohNoMessage">No matching products found.</p>
                        <p className="whisper">(But enjoy this cow)</p>
                        <img className="sadCow" src='/src/assets/sadCow.jpg' alt='Sad cow' />
                    </div>
                )
            ) : null}

        </div>
        </div>
    );
};

export default SearchResults;