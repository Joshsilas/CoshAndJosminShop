import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryPage from './Components/CategoryPage';
import CategoryMenu from "./Components/Category Menu/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import Product from "./Components/Product/index.jsx";
import Footer from "./Components/Footer/index.jsx";

function App() {

  return (
    <Router>
        <Navbar />
        <div className = 'banner'>
            <p>Welcome to Cosh and Josmin. The pretend E Shop!</p>
            <p>See whats hot!</p>
        </div>
        <main className='main'>
            <Product />
        </main>
        <Routes>
            <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
        <Footer />
    </Router>

  )
}

export default App
