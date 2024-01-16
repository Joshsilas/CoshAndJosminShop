import React, { useState, useEffect } from "react";
import './SearchResults.css';
import ProductContainer from "../ProductContainer/index.jsx";

const SearchResults = ({ data: originalData, searchTerm }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const filteredData = originalData.filter((row) =>
            row.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredData);
    }, [originalData, searchTerm]);

    return (
        <div>
            {searchTerm !== "" ? (
                data.length > 0 ? (
                    data.map((row) => (
                        <div className="search-product" key={row.id}>
                            <ProductContainer {...row} />
                        </div>
                    ))
                ) : (
                    <div className="ohNoMessage" >
                    <p className="ohNoMessage">No matching products found.</p>
                    </div>
                )
            ) : null}
        </div>
    );
};

export default SearchResults;