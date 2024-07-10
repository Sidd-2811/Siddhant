// import React from 'react'

import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/video/:categoryId/:videoId" element={<Video/>} ></Route>
      </Routes>
    </div>
  )
}

export default App