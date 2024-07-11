/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Feed } from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home