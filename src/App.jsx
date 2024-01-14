import './App.css'
import CategoryPage from './Components/CategoryPage';
import CategoryMenu from "./Components/Category Menu/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import './App.css'
import Product from "./Components/Product/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./Components/ProductPage/index.jsx";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        {/*<div className = 'banner'>*/}
        {/*    <p>Welcome to Cosh and Josmin. The pretend E Shop!</p>*/}
        {/*    <p>See whats hot!</p>*/}
        {/*</div>*/}
        {/*<main className='main'>*/}
        {/*    <Product />*/}
        {/*</main>*/}
        <Routes>
            <Route path={"/"} element={<Product/>}/>
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path='/product-page/:id' element={<ProductPage/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
