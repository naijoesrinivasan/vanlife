import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Vans from "./pages/Vans"
import Detail from "./pages/Detail"

import './mirageServer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<Detail /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
