import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './ProductPage.css'
import QuantityForm from "../Quantity Form/index.jsx";


const ProductPage = ({handleClearClick, addToCart}) => {
    const {id} = useParams()
    const url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState(null)
    const [readMore, setreadMore] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [error, setError] = useState("");
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

    const addToCartHandler = () => {
        if (!selectedQuantity || isNaN(selectedQuantity) || selectedQuantity <= 0) {
            setError({ message: "Please select a valid quantity", type: "error" });
            setTimeout(() => {
                setError("");
            }, 3000);
        } else {
            addToCart(product, selectedQuantity);
            setError({ message: "Added to cart", type: "success" });
            setTimeout(() => {
                setError("");
            }, 3000);
        }
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
                        <div className="product-page-description">{readMore ? product.description: `${product.description.substring(0,100)}...`}
                            <button type='button' className='info-btn' onClick={() => setreadMore(!readMore)}>
                                {readMore ? 'show less' : 'read more'}
                            </button>
                        </div>
                        <QuantityForm
                        selectedQuantity={selectedQuantity}
                        setSelectedQuantity={setSelectedQuantity}
                        />
                        {error &&
                            <div className={`error-message ${error.type}`}>
                                         {error.message}
                        </div> }
                        <button type='button' className='btn-add-to-basket' onClick={addToCartHandler}>Add to cart</button>
                    </div>
                </div>
            )}
        </div>
        </section>
    )
}

export default ProductPage