import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Components/Navbar/index.jsx";
import CategoryMenu from "./Components/Category Menu/index.jsx";
import SearchBar from "./Components/Search Bar/index.jsx";
import ButtonCart from "./Components/Button Cart/index.jsx";

function App() {


  return (
    <>
        <Navbar />
        <CategoryMenu/>
        <SearchBar/>
        <ButtonCart/>
        <p>Hello Cosmin I have set up a repo</p>
    </>
  )
}

export default App
