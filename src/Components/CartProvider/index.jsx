import React, { useState, useEffect } from 'react';
import CartContext from '../CartContext/index.jsx';
import { useParams } from 'react-router-dom';

const CartProvider = ({ children }) => {
    const { id } = useParams();
    const urlProduct = `https://fakestoreapi.com/products/${id}`;
    const urlCarts = 'https://fakestoreapi.com/carts/';
    const [product, setProduct] = useState(null);
    const [carts, setCarts] = useState([]);

    const fetchCarts = async () => {
        try {
            const response = await fetch(urlCarts);
            const cartsData = await response.json();
            console.log('Fetched All Carts:', cartsData);
            setCarts(cartsData);
        } catch (err) {
            console.error('Error fetching carts:', err);
        }
    };

    const fetchProduct = async () => {
        try {
            const response = await fetch(urlProduct);
            const product = await response.json();
            console.log('Fetched Product:', product);
            setProduct(product);
        } catch (err) {
            console.error('Error fetching product:', err);
        }
    };

    const updateCart = async (productId) => {
        try {
            // Fetch the current cart for the user (you may need to replace 1 with the actual user ID)
            const response = await fetch(`https://fakestoreapi.com/carts/1`);
            const currentCart = await response.json();

            // Find the index of the product in the cart
            const existingProductIndex = currentCart.findIndex((item) => item.productId === productId);

            if (existingProductIndex !== -1) {
                // If the product is already in the cart, update the quantity
                currentCart[existingProductIndex].quantity += 1;
            } else {
                // If the product is not in the cart, add it with quantity 1
                currentCart.push({ productId, quantity: 1 });
            }

            // Update the cart on the server
            const updateResponse = await fetch(`https://fakestoreapi.com/carts/1`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentCart),
            });

            if (updateResponse.ok) {
                console.log('Product added to cart successfully');
                // Refetch carts after successful update
                fetchCarts();
            } else {
                console.log('Failed to add product to cart');
            }
        } catch (err) {
            console.log('Error updating cart:', err);
        }
    };

    useEffect(() => {
        fetchCarts();
    }, [id]); // Fetch all carts whenever id changes

    return (
        <CartContext.Provider value={{ product, carts, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;