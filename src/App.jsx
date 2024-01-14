import './App.css'
import Navbar from "./Components/Navbar/index.jsx";
import './App.css'
import Product from "./Components/Product/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./Components/ProductPage/index.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Product/>}/>
            {/*<Route path="/category/:categoryName" element={<CategoryPage />} />*/}
            <Route path='/product-page/:id' element={<ProductPage/>}/>
        </Routes>
        <Footer />

    </BrowserRouter>
  )
}



export default App
