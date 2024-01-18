import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/index.jsx";
import './CategoryPage.css';
import ProductContainer from "../ProductContainer/index.jsx";


const CategoryPage = ({handleClearClick}) => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/category/${categoryName}`
                );
                const products = await response.json();
                setProducts(products);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProductsByCategory();
    }, [categoryName]);

    const handleProductClick = () => {
        handleClearClick();
    };

    return (
        <div>
            <h2 className="banner">{categoryName}</h2>
            <section>
                <div className='products'>
                    {(products).map((product) => (
                        <div className="single-product-category" key={product.id}>
                            <ProductContainer {...product} handleClearClick={handleProductClick}/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CategoryPage;
