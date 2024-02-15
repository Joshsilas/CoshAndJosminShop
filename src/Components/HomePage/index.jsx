import ProductContainer from "../ProductContainer/index.jsx";
import React, {useEffect, useState} from "react";
import './HomePage.css'
import Banner from "../Banner/index.jsx";
import {Link} from "react-router-dom";

const HomePage = ({handleClearClick}) => {
    const url = 'https://fakestoreapi.com/products';
    const[products, setProducts] = useState([])
    const [productsToShow, setProductsToShow] = useState(getProductsToShow());

    useEffect(() => {
        function handleScreenResize() {
            setProductsToShow(getProductsToShow());
        }
        window.addEventListener('resize', handleScreenResize);
        return () => {
            window.removeEventListener('resize', handleScreenResize);
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
                <Link className="offersBanners" to="/SalesPage/">
                    <p className="offerText">Sale</p>
                </Link>
                <Link className="offersgifts" to="/GiftsPage/">
                    <p className="offerText">Gifts</p>
                </Link>
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