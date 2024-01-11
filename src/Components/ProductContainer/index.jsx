import './ProductContainer.css'
const ProductContainer = ({id, category, title, price, image, description}) => {
    return (
        <div>
        <img src={image} alt={image} className='img'/>
         <div className='product-price'>£{price}</div>
         <h4>{title}</h4>
            <br/>
         <p>{category.toUpperCase()}</p>
         {/*<p>{description}</p>*/}
            </div>
    )
}
export default ProductContainer