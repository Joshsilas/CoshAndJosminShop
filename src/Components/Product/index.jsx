import ProductContainer from "../ProductContainer/index.jsx";
import {useEffect, useState} from "react";
import './Product.css'
const Product = () => {
    const url = 'https://fakestoreapi.com/products';
    const[products, setProducts] = useState([])

    const fetchProducts = async () => {
        try{
            const response = await fetch(url)
            const products = await response.json()
            setProducts(products)
        } catch(err) {
            console.log(err)}
    }

    useEffect(() => {
        fetchProducts()
    }, []);
    return (
        <section>
            <div className='products'>
                {products.slice(0, 4).map((product) => (
                    <div className="single-product" key={product.id}>
                        <ProductContainer {...product} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Product;