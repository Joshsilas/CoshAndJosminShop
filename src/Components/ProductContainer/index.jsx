import './ProductContainer.css'
const ProductContainer = ({id, category, title, price, image, description}) => {
    return (
        <div>
        <div className='single-product'>
        <img src={image} alt={image} className='img'/>
         <div className='product-price'>£{price}</div>
         <h2>{title}</h2>
         <p>{category}</p>
         <p>{description}</p>
        </div>
            </div>
    )
}
export default ProductContainer