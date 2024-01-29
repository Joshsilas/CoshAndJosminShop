import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import './ProductPage.css'
import Quantity from "../Quantity Form/index.jsx";


const ProductPage = ({handleClearClick}) => {
    const {id} = useParams()
    const url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState(null)
    const [readMore, setreadMore] = useState(false);
    const[cart, setCart] = useState([])
    const fetchProduct = async () => {
        try {
            const response = await fetch(url)
            const product = await response.json()
            setProduct(product)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProduct()
    },[id]);

    const handleProductClick = () => {
        handleClearClick();
    };

    const updateCart = async () => {
        try {
            const response = await  fetch('https://fakestoreapi.com/carts/7', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        userId: parseInt(id),
                        date: new Date().toISOString(),
                        products: [{productId: product.id, quantity: 1}],
                    })
            })
                const updatedCart = await response.json()
            console.log("Updated cart:",updatedCart)
        } catch(err)  {
            console.log(err)
        }
    }

    return (
        <section>
        <div className='product-page-container'>
            {product && (
                <div key={product.id} className="product-page-layout">
                    <div className="img-container-product-page">
                        <img src={product.image} alt={product.image} className='product-page-img'/>
                    </div>

                    <div className="product-page-details">
                        <h1 className="product-page-title">{product.title}</h1>
                        <div className="product-page-price">£{product.price.toFixed(2)}</div>
                        <div className="product-page-category"><strong>Category:</strong> {product.category}</div>
                        <div className="product-page-description">{readMore ? product.description: `${product.description.substring(0,100)}...`}
                            <button type='button' className='info-btn' onClick={() => setreadMore(!readMore)}>
                                {readMore ? 'show less' : 'read more'}
                            </button>
                        </div>
                        <Quantity/>
                        <button type='button' className='btn-add-to-basket' onClick={updateCart}>Add to cart</button>
                    </div>
                </div>
            )}
        </div>
        </section>
    )
}

export default ProductPage