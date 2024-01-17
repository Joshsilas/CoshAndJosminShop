import './ProductContainer.css'
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import ProductPage from "../ProductPage/index.jsx";
import product from "../HomePage/index.jsx";
import HomePage from "../HomePage/index.jsx";
const ProductContainer = ({id, category, title, price, image, description,product,  handleClearClick, setSearchTerm}) => {
    const navigate = useNavigate()

    const clickOnImage = () => {
        navigate(`/product-page/${id}`);
    };

    return (
        <div>
            <Link to={`/product-page/${id}`} onClick={clickOnImage}>
        <img src={image} alt={image} className='img'/>
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