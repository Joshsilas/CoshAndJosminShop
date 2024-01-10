
const Product = ({id, category, title, price, image, description}) => {
    return (
        <>
        <img src={image} alt={image} className='img'/>
         <span className='product-price'>£{price}</span>
         <h2>{title}</h2>
         <h5>{category}</h5>
         <p>{description}</p>
        </>
    )
}
export default Product