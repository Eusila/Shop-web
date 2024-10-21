import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className='layout'>
      <Navbar/>
      <Outlet/>
    </div>
  
  )
}

export default Layout