import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomeLayout from "./layouts/HomeLayout"
import HostLayout from "./layouts/HostLayout"
import HostVanDetail, { loader as hostVanDetailLoader } from "./layouts/HostVanDetailLayout"


import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, {loader as vanDetailLoader} from "./pages/Vans/VanDetail"
import HostVans, {loader as hostVansLoader} from "./pages/Hosts/HostVans"
import Dashboard from "./pages/Hosts/Dashboard"
import Income from "./pages/Hosts/Income"
import Reviews from "./pages/Hosts/Reviews"
import Pricing from "./pages/Hosts/Pricing"
import Details from "./pages/Hosts/Details"
import Photos from "./pages/Hosts/Photos"
import NotFound from "./pages/NotFound"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login"

import Error from "./components/Error"

import './mirageServer'
import { requireAuth } from "./utils"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'login',
          loader: loginLoader,
          element: <Login />,
          action: loginAction
        },
        {
          path: 'vans',
          element: <Vans />,
          loader: vansLoader,
          errorElement: <Error />
        },
        {
          path: 'vans/:id',
          element: <VanDetail />,
          loader: vanDetailLoader
        },
        {
          path: 'host',
          loader: async() => await requireAuth(),
          element: <HostLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />
            },
            {
              path: 'income',
              element: <Income />
            },
            {
              path: 'reviews',
              element: <Reviews />
            },
            {
              path: 'vans',
              loader: hostVansLoader,
              element: <HostVans />
            },
            {
              path: 'vans/:id',
              loader: hostVanDetailLoader,
              element: <HostVanDetail />,
              children: [
                {
                  index: true,
                  element: <Details />
                },
                {
                  path: 'pricing',
                  element: <Pricing />
                },
                {
                  path: 'photos',
                  element: <Photos />
                }
              ]
            }
          ]
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<HomeLayout />}>
    //       <Route index element={<Home />}/>
    //       <Route path='about' element={<About />} />
    //       <Route path='vans' element={<Vans />} />
    //       <Route path='vans/:id' element={<VanDetail /> } />

    //       <Route path='host' element={<HostLayout />}>
    //         <Route index element={<Dashboard />}/>
    //         <Route path='income' element={<Income />}/>
    //         <Route path='reviews' element={<Reviews />}/>
    //         <Route path='vans' element={<HostVans />}/>
    //         <Route path='vans/:id' element={<HostVanDetail />}> 
    //           <Route index element={<Details />} />
    //           <Route path='pricing' element={<Pricing />} />
    //           <Route path='photos' element={<Photos />} />
    //         </Route>
    //       </Route>
    //       <Route path="*" element={<NotFound />}></Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  )
}

export default App
