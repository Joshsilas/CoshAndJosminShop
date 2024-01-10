import Product from "../Product/index.jsx";

const ProductsContainer = ({products}) => {
    return (
        <section>
            <div className='products'>
                {products.map((product) => {
                    return <Product key={product.id} {...product}/>
                })}
            </div>
        </section>
    )
}
export default ProductsContainer