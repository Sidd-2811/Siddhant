/* eslint-disable no-unused-vars */
import React from 'react'
import "./Home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
    </>
  )
}

export default Home