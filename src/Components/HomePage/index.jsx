import ProductContainer from "../ProductContainer/index.jsx";
import {useEffect, useState} from "react";
import './HomePage.css'
import Banner from "../Banner/index.jsx";
const HomePage = ({handleClearClick}) => {
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

    const handleProductClick = () => {
        handleClearClick();
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <section>
            <Banner />
            <div className="bannerPlacement">
            <div className="trendingNowBanner">
                <p>Recently viewed</p>
            </div>
        </div>
            <div className='products'>
                {shuffleArray(products).slice(0, 6).map((product) => (
                    <div className="single-product" key={product.id}>
                        <ProductContainer {...product} handleClearClick={handleProductClick} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomePage;