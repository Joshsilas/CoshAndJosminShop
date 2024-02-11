import React from "react";
import './Cartpage.css';
const CartPage = ({ cartProducts }) => {
    return (
        <div>
            <h1>Cart Page</h1>

            {cartProducts.map((product, index,) => (
                <div key={index} className="cart-product">
                    <img className="cartproductImage" src={product.image}></img>
                    <div className="cart-product-details">
                        <h3>{product.title}</h3>
                        <p>Price: £{product.price.toFixed(2)}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default CartPage