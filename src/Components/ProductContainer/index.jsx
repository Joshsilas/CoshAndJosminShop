import './ProductContainer.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductContainer = ({ id, category, title, price, image, handleClearClick }) => {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        handleClearClick();
    };

    const clickOnImage = () => {
        navigate(`/product-page/${id}`);
    };

    return (
        <div>
            <Link to={`/product-page/${id}`} onClick={(e) => {
                clickOnImage();
                handleCategoryClick();
            }}>
                <img src={image} alt={image} className='img' />
            </Link>
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