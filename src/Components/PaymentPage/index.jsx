import InputForms from "../InputForms/index.jsx";
import Button from "../Button/index.jsx";
import React, {useEffect, useState} from "react";
import './PaymentPage.css';
import { useNavigate } from "react-router-dom";

const PaymentPage = ({ cartProducts, clearCart }) => {
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        name: '',
        sortCode: ''
    });

    const navigate = useNavigate();
    const totalCost = cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    const Cancel = async () => {
        navigate('/');
    }

    const validateAndPay = () => {
        if (!cardDetails.cardNumber || !/^\d{16}$/.test(cardDetails.cardNumber)) {
            alert("Please enter a valid 16-digit card number.");
            return;
        }

        if (!cardDetails.expiryDate || !/^\d{2}\/\d{2}$/.test(cardDetails.expiryDate)) {
            alert("Please enter a valid expiry date in the format MM/YY.");
            return;
        }

        if (!cardDetails.name || !/^[a-zA-Z\s]+$/.test(cardDetails.name)) {
            alert("Please enter a valid name with only letters and spaces.");
            return;
        }

        if (!cardDetails.sortCode || !/^\d{6}$/.test(cardDetails.sortCode)) {
            alert("Please enter a valid 6-digit sort code.");
            return;
        }

        alert("Payment successful!");
        clearCart();
        navigate("/ThankYouPage/");
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                validateAndPay();
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [validateAndPay]);

    return (
        <>
            <p className="signInMessage">Please enter your card details</p>
            <p className="cartTotalCost">Cart Total: £{totalCost.toFixed(2)}</p>
            <div className="PaymentFormsDisplay">
                <InputForms
                    id="CardNumber"
                    className="paymentforms"
                    placeholder={"Card Number"}
                    type="text"
                    value={cardDetails.cardNumber}
                    onChange={(newValue) => setCardDetails(prevState => ({ ...prevState, cardNumber: newValue }))}
                />
                <InputForms
                    id="ExpiryDate"
                    className="paymentforms"
                    placeholder={"Expiry date (MM/YY)"}
                    type="text"
                    value={cardDetails.expiryDate}
                    onChange={(newValue) => {
                        const cleanedValue = newValue.replace(/\D/g, '');
                        const formattedValue = cleanedValue.replace(/^(.{2})/, '$1/');
                        setCardDetails(prevState => ({...prevState, expiryDate: formattedValue}));
                    }}
                />
                <InputForms
                    id="Name"
                    className="paymentforms"
                    placeholder={"Name"}
                    type="text"
                    value={cardDetails.name}
                    onChange={(newValue) => setCardDetails(prevState => ({ ...prevState, name: newValue }))}
                />
                <InputForms
                    id="SortCode"
                    className="paymentforms"
                    placeholder={"Sort Code"}
                    type="text"
                    value={cardDetails.sortCode}
                    onChange={(newValue) => setCardDetails(prevState => ({ ...prevState, sortCode: newValue }))}
                />
                <Button className="Cancel" text="Cancel" onClick={Cancel}  type="button"/>
                <Button className="PayButton" text="Pay Now" onClick={validateAndPay}  type="button" />
            </div>
        </>
    );
};

export default PaymentPage;