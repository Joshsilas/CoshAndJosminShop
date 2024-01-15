import React from "react";
import ProductContainer from "../ProductContainer/index.jsx";

const SearchResults = ({ data, searchTerm }) => {

    const filteredData = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {filteredData.map((product) => (
                <div className="single-product" key={product.id}>
                    <ProductContainer {...product} />
                </div>
            ))}
        </div>
    );
};

export default SearchResults;