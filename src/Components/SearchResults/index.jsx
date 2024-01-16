import React, { useState } from "react";
import ProductContainer from "../ProductContainer/index.jsx";
import SearchBar from "../SearchBar/index.jsx";

const SearchResults = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <SearchBar handleSearch={handleSearch} />

            {searchTerm !== "" &&
                data
                    .filter((row) =>
                        row.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((row) => (
                        <div className="single-product" key={row.id}>
                            <ProductContainer {...row} />
                        </div>
                    ))}
        </div>
    );
};

export default SearchResults;