import './ProductContainer.css'
const ProductContainer = ({id, category, title, price, image, description}) => {
    return (
        <div>
        <img src={image} alt={image} className='img'/>
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