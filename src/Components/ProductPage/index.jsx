
import {useEffect, useState} from "react";
import ProductContainer from "../ProductContainer/index.jsx";
import {useParams} from "react-router-dom";
import './ProductPage.css'

const ProductPage = () => {
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


    return (
        <section>
        <div className='product-page-container'>
            {product && (
                <div key={product.id} className="product-container">
                    <div className="img-container">
                        <img src={product.image} alt={product.image} className='product-img'/>
                    </div>
                    <div className="product-details">
                        <div className="product-title">{product.title}</div>
                        <div className="product-price">£{product.price}</div>
                        <div className="product-category">{product.category}</div>
                        <div className="product-description">{product.description}</div>
                    </div>
                </div>
            )}
        </div>
        </section>
    )
}

export default ProductPage