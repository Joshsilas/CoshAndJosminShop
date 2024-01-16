import './App.css'
import Navbar from "./Components/Navbar/index.jsx";
import Product from "./Components/Product/index.jsx";
import Footer from "./Components/Footer/index.jsx";

function App() {

  return (
    <>

        <Navbar />
        <div className = 'banner'>
            <p>Welcome to Coggsh and Josmin. The pretend E Shop!</p>
            <p>See whats hot!</p>
        </div>
        <main className='main'>
            <Product />
        </main>
        <Footer />

    </>

  )
}

export default App
