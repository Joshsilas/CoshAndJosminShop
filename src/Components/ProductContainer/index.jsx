import './ProductContainer.css';
import { Link, useNavigate } from 'react-router-dom';

const ProductContainer = ({ id, category, title, price, image, handleClearClick, clearSearchBar }) => {

    const navigate = useNavigate();

    return (
        <div>
            <Link to={`/product-page/${id}`}>
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