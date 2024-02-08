import React from "react";
import './Cartpage.css';
const CartPage = ({ cartProducts }) => {
    return (
        <div>
            <h1>Cart Page</h1>

            {cartProducts.map((product, index) => (
                <div key={index}>
                    <img className="cartproductImage" src={product.image}></img>
                </div>
            ))}
        </div>
    );
}
export default CartPage