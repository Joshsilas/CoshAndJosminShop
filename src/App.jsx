import './App.css'
import Navbar from "./Components/Navbar/index.jsx";
import {useEffect, useState} from "react";
import Product from "./Components/Product/index.jsx";

const url = 'https://fakestoreapi.com/products';
function App() {

const[products, setProducts] = useState(true)

 const fetchProducts = async () => {
    try{
     const response = await fetch(url)
     const products = await response.json()
    } catch(err) {
        console.log(err)}
 }

    useEffect(() => {
        fetchProducts()
    }, []);
  return (
    <>
        <Navbar />
        <div className = 'banner'>
            <p>Welcome to Cosh and Josmin. yeah!</p>
        </div>
        <main className='main'>
            <Product products={products}/>
        </main>
    </>
  )
}

export default App
