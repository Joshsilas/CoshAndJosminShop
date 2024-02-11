import React, {useState} from "react";
import './Cartpage.css';
const CartPage = ({ cartProducts, removeFromCart }) => {

    return (
        <div>
            <h1>Cart Page</h1>

            {cartProducts.map((product, index,) => (
                <div key={index} className="cart-product">
                    <img className="cartproductImage" src={product.image}></img>
                    <div className="cart-product-details">
                        <h3>{product.title}</h3>
                        <p>Price: £{product.price.toFixed(2 ) * product.quantity}</p>
                        <p>Quantity: {product.quantity}</p>
                        <button type='button' className='btn' onClick={() => removeFromCart(product.id)}>Remove product</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default CartPage