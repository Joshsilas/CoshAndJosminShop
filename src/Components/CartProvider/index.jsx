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

    useEffect(() => {
        fetchCarts();
    }, [id]); // Fetch all carts whenever id changes

    return (
        <CartContext.Provider value={{ product, carts }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;