import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Components/Navbar/index.jsx";
import CategoryMenu from "./Components/Category Menu/index.jsx";

function App() {


  return (
    <>
        <Navbar />
        <CategoryMenu/>
        <p>Hello Cosmin I have set up a repo</p>
    </>
  )
}

export default App
