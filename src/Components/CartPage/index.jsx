import React from "react";
import './Cartpage.css';
import Button from "../Button/index.jsx";
import {Link, useNavigate} from "react-router-dom";

const CartPage = ({ cartProducts, removeFromCart, handleClearClick }) => {
    const totalCost = cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const navigate = useNavigate();

    const paymentScreen = () => {
        navigate ("/AddressPage/")
    }

    return (
        <div>
            <h1 className="categoryBanner">Cart Page</h1>
            {cartProducts.length === 0 ? (
                <div className="emptyCartMessage">
                    <p className="emptyCartMessage">Your cart is currently empty.</p>
                    <Link className="backToHomePageLinkCartpage" to="/">
                        Back to home page
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="cartPagelayout">
                        <p className="cartTotalCost">Cart Total: £{totalCost.toFixed(2)}</p>
                    </div>
                    <div className="cart-layout">
                        {cartProducts.map((product, index) => (
                            <div key={index} className="cart-product">
                                <img className="cartproductImage" src={product.image} alt={`Product: ${product.title}`} />
                                <div className="cart-product-details">
                                    <p className="cartProductTitle">{product.title}</p>
                                    <p className="cartProductPrice">£{(product.price * product.quantity).toFixed(2)}</p>
                                    <p className="cartProductQuanity">Quantity: {product.quantity}</p>

                                </div>
                                <Button type='button' className='removeButton' onClick={() => removeFromCart(product.id)} text="Remove product" />
                            </div>
                        ))}
                    </div>
                    <div className="paynowDisplay">
                    <Button className="toAddress" text="Pay Now" onClick={paymentScreen} />
                    </div>

                </div>
            )}
        </div>
    );
}

export default CartPage;