
import './cartButton.css';

const CartButton = ({className, text}) => {
    return (
        <button className="cartImage" type='button'>
            <img className="cartImage" src='/src/assets/cart-shopping-solid.svg' alt='Shopping Cart' />
        </button>

    )
}
export default CartButton
