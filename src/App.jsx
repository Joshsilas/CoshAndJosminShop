import './App.css'
import CategoryPage from './Components/CategoryPage';
import Navbar from "./Components/Navbar/index.jsx";
import './App.css'
import HomePage from "./Components/HomePage/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./Components/ProductPage/index.jsx";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path='/product-page/:id' element={<ProductPage/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
