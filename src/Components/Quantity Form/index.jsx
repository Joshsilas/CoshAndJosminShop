import './QuantityForm.css'
import {useState} from "react";

const Quantity = ({selectedQuantity, setSelectedQuantity}) => {
    const handleQuantityChange = (event) => {
        setSelectedQuantity(event.target.value)
    }

    return (
        <>
            <form action='#' className='dropdown-menu-container'>
                <div className='quantity-text'>Quantity</div>
                <select className='quantityList value-box' id='quantity' value={selectedQuantity} onChange={handleQuantityChange} >
                    <option value=''>
                        Select quantity
                    </option>
                    {[...Array(10).keys()].map((num) =>(
                        <option key={num} value={num + 1}>{num + 1}</option>
                    ))}
                </select>
            </form>
        </>
    )
}
export default Quantity