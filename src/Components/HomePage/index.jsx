import ProductContainer from "../ProductContainer/index.jsx";
import React, {useEffect, useState} from "react";
import './HomePage.css'
import Banner from "../Banner/index.jsx";

const HomePage = ({handleClearClick}) => {
    const url = 'https://fakestoreapi.com/products';
    const[products, setProducts] = useState([])
    const [productsToShow, setProductsToShow] = useState(getProductsToShow());

    useEffect(() => {
        function handleResize() {
            setProductsToShow(getProductsToShow());
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    function getProductsToShow() {
        return window.innerWidth <= 768 ? 8 : 9;
    }
    const shuffledProducts = shuffleArray(products).slice(0, productsToShow)


    return (
        <section>
            <Banner />
            <div className="offersBannersPlacement">
                <div className="offersBanners">
                <p className="offerText">Sale</p>
                </div>
                <div className="offersgifts">
                    <p className="offerText">Gifts</p>
                </div>
            </div>
            <div className="bannerPlacement">
            <div className="trendingNowBanner">
                <p>Recently viewed</p>
            </div>
        </div>
            <div className='products'>
                {shuffledProducts.map((product)  => (
                    <div className="single-product" key={product.id}>
                        <ProductContainer {...product} handleClearClick={handleProductClick} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomePage;