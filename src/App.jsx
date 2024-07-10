// import React from 'react'

import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'
import { useState } from "react"
const App = () => {
  const [sidebar , setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}></Route>
        <Route path="/video/:categoryId/:videoId" element={<Video/>} ></Route>
      </Routes>
    </div>
  )
}

export default App