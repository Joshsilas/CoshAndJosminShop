import Navbar from "../Navbar/index.jsx";
import {useEffect, useState} from "react";
import ProductContainer from "../ProductContainer/index.jsx";
import {useParams} from "react-router-dom";

const ProductPage = () => {
    const {id} = useParams()
    const url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState(null)

    const fetchProduct = async () => {
        try {
            const response = await fetch(url)
            const product = await response.json()
            setProduct(product)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProduct()
    },[id]);


    return (
        <section>
        <div className='product'>
            {product && (
                <div className="single-product" key={product.id}>
                <ProductContainer {...product}/>
                </div>
            )}
        </div>
        </section>
    )
}

export default ProductPage