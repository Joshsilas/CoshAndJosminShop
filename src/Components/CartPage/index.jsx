import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


const CartPage = () => {
    const {id} = useParams()
    const urlProduct = `https://fakestoreapi.com/products/${id}`;
    const urlCart = 'https://fakestoreapi.com/carts/';
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState([]);


    const fetchProduct = async () => {
        try {
            const response = await fetch(urlProduct);
            const product = await response.json()
            setProduct(product)
        } catch (err) {
            console.log(err)
        }
    }
    const fetchCart = async () => {
        try {
            const response = await fetch(urlCart);
            const cartData = await response.json()
            console.log("cart Data:" ,cartData)
            const currentCart = cartData.find(item => item.productId === parseInt(id));
            console.log("current cart", currentCart)
            setCart(currentCart ? currentCart.products : []);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchProduct()
    },[id]);

    useEffect(() => {
        fetchCart()
    },[]);

    return (
        <section>
            <div className='cart-page-container'>
                {product && (
                    <div key={product.id}>
                        <img src={product.image} alt={product.image} className={'cart-page-img'}/>
                    </div>
                )}
                <div className='cart-items'>
                    <h2>Cart Items</h2>
                    <ul>
                        {cart.map((item,index) =>(
                            <li key={index}>
                                <p>{item.title}</p>
                                <p>Quantity: {item.quantity}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default CartPage