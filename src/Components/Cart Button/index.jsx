import './cartButton.css';
import {useNavigate} from "react-router-dom";

const CartButton = ({className, text, handleClearClick}) => {
    const navigate = useNavigate();

    const handleCartNavigation = () => {
        navigate('/cart-page');
        handleClearClick();
    }

    return (
        <button className="cartImage" type='button' onClick={handleCartNavigation}>
            <img className="cartImage" src='/cart-shopping-solid.svg' alt='Shopping Cart' />
        </button>

    )
}

export default CartButton
