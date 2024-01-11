import './App.css'
import Navbar from "./Components/Navbar/index.jsx";

function App() {

  return (
    <>
        <Navbar />
        <div className = 'banner'>
            <p>Welcome to Cosh and Josmin. The pretend E Shop!</p>
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
