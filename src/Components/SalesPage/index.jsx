import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './Salespage.css'
import ProductContainer from "../ProductContainer/index.jsx";

const SalesPage = ({ handleClearClick }) => {
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

    const randomProducts = getRandomProducts(products, 3);

    return (
        <div>
            <h2 className="categoryBanner">On Sale</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section>
                    <div className="products">
                        {randomProducts.map((product) => (
                            <div className="single-product" key={product.id}>
                                <p className="pretendSaleFigure">£{(product.price * 1.5).toFixed(2)}</p>
                                <ProductContainer {...product} handleClearClick={handleProductClick} />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default SalesPage;