import './ProductContainer.css'
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import ProductPage from "../ProductPage/index.jsx";
import product from "../Product/index.jsx";
import Product from "../Product/index.jsx";
const ProductContainer = ({id, category, title, price, image, description,product}) => {
    const navigate = useNavigate()
    const clickOnImage = () => {
        navigate(`/product-page/${id}`);
    };

    return (
        <div>
            <Link to={`/product-page/${id}`}>
        <img src={image} alt={image} className='img' onClick={clickOnImage}/>
            </Link>
            <br/>
         <div className='product-price'>£{price.toFixed(2)}</div>
            <br/>
         <p className="productTitle">{title}</p>
            <br/>
         <p className='productCategory'>{category.toUpperCase()}</p>
        <br/>
         {/*<p>{description}</p>*/}
            </div>
    )
}
export default ProductContainer