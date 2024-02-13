import './GiftsPage.css'
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductContainer from "../ProductContainer/index.jsx";

const GiftsPage = ({ handleClearClick }) => {
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
            console.error(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleProductClick = () => {
        handleClearClick();
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const getRandomProducts = (arr, count) => {
        const shuffledProducts = shuffleArray([...arr]);
        return shuffledProducts.slice(0, count);
    };

    const randomProducts = getRandomProducts(products, 6);

    return (
        <div>
            <h2 className="categoryBanner">Gifts we think you will like</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section>
                    <div className="products">
                        {randomProducts.map((product) => (
                            <div className="single-product" key={product.id}>
                                <ProductContainer {...product} handleClearClick={handleProductClick} />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default GiftsPage;