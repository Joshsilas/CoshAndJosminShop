import React from "react";

const CartPage = ({ cartProducts }) => {
    return (
        <div>
            <h1>Cart Page</h1>

            {cartProducts.map((product, index) => (
                <div key={index}>
                    <img src= {product.image}></img>
                </div>
            ))}
        </div>
    );
}
export default CartPage