import React, { useEffect, useState } from "react";
import ProductContainer from "../ProductContainer/index.jsx";

const SearchResults = ({ searchTerm }) => {
    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch(url);
            const products = await response.json();
            setProducts(products);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const filteredData = products.filter((product) =>
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