import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Places from "./pages/Places"
import DropDownMenu from "./pages/DropDownMenu"
import Contact from "./pages/Contact"

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="places" element={<Places/>}/>
        <Route path="DropDown" element={<DropDownMenu/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
 ))
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
