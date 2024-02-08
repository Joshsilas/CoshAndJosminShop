import './cartButton.css';
import {useNavigate} from "react-router-dom";

const CartButton = ({className, text}) => {
    const navigate = useNavigate();

    const handleCartNavigation = () => {
        navigate('/cart-page');
    }
    return (
        <button className="cartImage" type='button' onClick={handleCartNavigation}>
            <img className="cartImage" src='/src/assets/cart-shopping-solid.svg' alt='Shopping Cart' />
        </button>

    )
}

export default CartButton
