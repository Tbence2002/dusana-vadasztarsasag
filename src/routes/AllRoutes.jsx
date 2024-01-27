import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import MyGallery from "../pages/MyGallery";

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Quiz" element={<Quiz/>}/>
        <Route path="Galeria" element={<MyGallery/>}/>
      </Routes>
  )
}

export default AllRoutes