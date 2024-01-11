import './App.css'
import Navbar from "./Components/Navbar/index.jsx";
import {useEffect, useState} from "react";
import ProductsContainer from "./Components/Product/index.jsx";
import Product from "./Components/Product/index.jsx";

function App() {

  return (
    <>
        <Navbar />
        <div className = 'banner'>
            <p>Welcome to Cosh and Josmin. yeah!</p>
        </div>
        <main className='main'>
            <Product />
        </main>
    </>
  )
}

export default App
