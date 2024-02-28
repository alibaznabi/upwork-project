import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {Route, RouterProvider, createBrowserRouter, createRoutesFromElements}from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Gallery from './Pages/Gallery.jsx'
import Packages from './Pages/Packages.jsx'
import Attraction from './Pages/Attraction.jsx'
import ContactUs from './Pages/ContactUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="packages" element={<Packages />} />
      <Route path="attraction" element={<Attraction />} />
      <Route path="contactus" element={<ContactUs/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
