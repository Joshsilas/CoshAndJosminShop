
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './ProductPage.css'
import Quantity from "../Quantity Form/index.jsx";
import Button from "../Button/index.jsx";

const ProductPage = ({handleClearClick}) => {
    const {id} = useParams()
    const url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState(null)

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
                        <div className="product-page-description">{product.description}</div>
                        <Quantity/>
                        <button type='button' className='btn-add-to-basket'>Add to basket</button>
                    </div>
                </div>
            )}
        </div>
        </section>
    )
}

export default ProductPage