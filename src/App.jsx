import './App.css'
import Navbar from "./Components/Navbar/index.jsx";
import {useEffect, useState} from "react";
import ProductsContainer from "./Components/Products Container/index.jsx";

const url = 'https://fakestoreapi.com/products';
function App() {

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
    <>
        <Navbar />
        <div className = 'banner'>
            <p>Welcome to Cosh and Josmin. yeah!</p>
        </div>
        <main className='main'>
            <ProductsContainer products={products}/>
        </main>
    </>
  )
}

export default App
