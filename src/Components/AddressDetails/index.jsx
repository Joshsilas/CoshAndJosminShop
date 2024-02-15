import InputForms from "../InputForms/index.jsx";
import Button from "../Button/index.jsx";
import React, { useState, useEffect } from "react";
import './AddressDetails.css';
import {useNavigate} from "react-router-dom";

const AddressDetails = () => {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        county: '',
        postalCode: ''
    });
    const navigate = useNavigate();
    const paymentScreen = () => {
        if (address.street && address.city && address.county && address.postalCode) {
            navigate("/PaymentPage/");
        } else {
           alert("Please fill in all address fields before proceeding to payment.");
        }
    }
    const Cancel = async () => {
        navigate('/');
    }
    const handleInputChange = (name, value) => {
        setAddress(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                paymentScreen();
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [paymentScreen]);


    return (
        <>
            <p className="signInMessage">Please enter your delivery details</p>
            <div className="PaymentFormsDisplay">
                <InputForms
                    id="StreetAddress"
                    name="street"
                    className="addressForms"
                    placeholder={"Street Address"}
                    type="text"
                    value={address.street}
                    onChange={(newValue) => handleInputChange("street", newValue)}
                />
                <InputForms
                    id="City"
                    name="city"
                    className="addressForms"
                    placeholder={"City"}
                    type="text"
                    value={address.city}
                    onChange={(newValue) => handleInputChange("city", newValue)}
                />
                <InputForms
                    id="County"
                    name="county"
                    className="addressForms"
                    placeholder={"County"}
                    type="text"
                    value={address.county}
                    onChange={(newValue) => handleInputChange("county", newValue)}
                />
                <InputForms
                    id="PostalCode"
                    name="postalCode"
                    className="addressForms"
                    placeholder={"Post Code"}
                    type="text"
                    value={address.postalCode}
                    onChange={(newValue) => handleInputChange("postalCode", newValue)}
                />
                <Button className="Cancel" text="Cancel" onClick={Cancel} type="button"/>
                <Button className="toPayment" text="Card details" onClick={paymentScreen} type="button"/>
            </div>
        </>
    );
};

export default AddressDetails