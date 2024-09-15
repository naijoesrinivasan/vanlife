import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"

import './mirageServer'
import HomeLayout from "./layouts/HomeLayout"
import HostLayout from "./layouts/HostLayout"
import Dashboard from "./pages/Hosts/Dashboard"
import Income from "./pages/Hosts/Income"
import Reviews from "./pages/Hosts/Reviews"
import HostVans from "./pages/Hosts/HostVans"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail /> } />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path='income' element={<Income />}/>
            <Route path='reviews' element={<Reviews />}/>
            <Route path='vans' element={<HostVans />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
