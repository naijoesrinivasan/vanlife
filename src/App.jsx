import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Vans from "./Components/Vans"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
