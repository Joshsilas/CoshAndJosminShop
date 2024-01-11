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

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <section>
            <div className='products'>
                {shuffleArray(products).slice(0, 6).map((product) => (
                    <div className="single-product" key={product.id}>
                        <ProductContainer {...product} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Product;