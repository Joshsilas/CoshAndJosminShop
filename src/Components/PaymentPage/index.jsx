import InputForms from "../InputForms/index.jsx";
import Button from "../Button/index.jsx";
import React from "react";
import './PaymentPage.css';

const PaymentPage = ({cartProducts}) => {

    const totalCost = cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
return (
    <>
        <p className="signInMessage">Please enter your card details</p>
        <p className="cartTotalCost">Cart Total: £{totalCost.toFixed(2)}</p>
        <div className="PaymentFormsDisplay">
            <InputForms
                id="PaymentForms"
                className="paymentforms"
                placeholder={"sortCode"}
                type="text"
                value=""
                onChange=""
            />
            <InputForms
                id="PaymentForms"
                className="paymentforms"
                placeholder={"sortCode"}
                type="text"
                value=""
                onChange=""
            />
            <InputForms
                id="PaymentForms"
                className="paymentforms"
                placeholder={"sortCode"}
                type="text"
                value=""
                onChange=""
            />
            <Button className="PayButton" text="Pay Now"  />
        </div>
    </>
);
};

export default PaymentPage