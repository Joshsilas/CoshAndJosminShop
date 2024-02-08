import React, { useContext, useEffect, useState } from "react";
import CartContext from "../CartContext/index.jsx";
import "./CartPage.css";

const CartPage = () => {
    const { carts } = useContext(CartContext);
    const [cartWithDetails, setCartWithDetails] = useState([]);

    useEffect(() => {
        const fetchProductDetails = async (productId) => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product details. Status: ${response.status}`);
                }

                const productDetails = await response.json();
                return productDetails;
            } catch (error) {
                console.error("Error fetching product details:", error.message);
                return null;
            }
        };

        const fetchCartDetails = async () => {
            const updatedCartWithDetails = await Promise.all(
                carts.map(async (cart) => {
                    const productsWithDetails = await Promise.all(
                        cart.products.map(async (product) => {
                            const productDetails = await fetchProductDetails(product.productId);
                            return {
                                ...product,
                                details: productDetails,
                            };
                        })
                    );

                    return {
                        ...cart,
                        products: productsWithDetails,
                    };
                })
            );

            setCartWithDetails(updatedCartWithDetails);
        };

        fetchCartDetails();
    }, [carts]);

    return (
        <section>
            <div className="cart-page-container">
                <div className="cart-items">
                    <h2>Cart Items</h2>
                    <ul>
                        {cartWithDetails.map((cart, index) => (
                            <li key={index}>
                                <p>Cart ID: {cart.id}</p>
                                <p>User ID: {cart.userId}</p>
                                <p>Products:</p>
                                <ul>
                                    {cart.products.map((product, productIndex) => (
                                        <li key={productIndex}>
                                            <p>Quantity: {product.quantity}</p>
                                            {product.details && (
                                                <div>
                                                    <p>Product Name: {product.details.title}</p>
                                                    <p>Product Price: £{product.details.price.toFixed(2)}</p>
                                                    <img
                                                        className="cartProductImage"
                                                        src={product.details.image}
                                                        alt={product.details.title}
                                                    />
                                                    {/* Add other product details as needed */}
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CartPage;