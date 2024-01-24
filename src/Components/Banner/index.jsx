import React, { useState, useEffect } from 'react';
import './banner.css';

const Banner = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    const messages = [
        "See what's hot!",
        "Discover new deals!",
        "Shop with confidence!",
    ];

    const updateBanner = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setMessageIndex(randomIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(updateBanner, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="banner">
            <p className="bannerMainTitle">Welcome to Cosh and Josmin!</p>
            <p>{messages[messageIndex]}</p>
        </div>
    );
};

export default Banner;