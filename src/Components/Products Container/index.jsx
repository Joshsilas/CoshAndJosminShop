import Product from "../Product/index.jsx";

const ProductsContainer = ({products}) => {
    return (
        <section>
            <div className='products'>
                {products.slice(0,4).map((product) => {
                    return <Product key={product.id} {...product}/>
                        })}
            </div>
        </section>
    )
}
export default ProductsContainer