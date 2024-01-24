
import './ProductContainer.css';
import {  useNavigate } from 'react-router-dom';

const ProductContainer = ({ id, category, title, price, image, handleClearClick , description,product }) => {
    const navigate = useNavigate();

    const handleProductClick = () => {
        handleClearClick();
    };

    const clickOnImage = () => {
        navigate(`/product-page/${id}`);
    };

    return (
        <div onClick={clickOnImage}>
            <img src={image} alt={image} className='img'/>
            <br />
            <div className='product-price'>£{price.toFixed(2)}</div>
            <br />
            <p className="productTitle">{title}</p>
            <br />
            <p className='productCategory'>{category.toUpperCase()}</p>
            <br />
        </div>
    );
};

export default ProductContainer;
