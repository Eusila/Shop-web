import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className='main-container'>
         <nav className='main-nav'>
            <h1>CH$ Shop</h1>
            <ul className='main-ul'>
             <li><Link to={'products'} >Products</Link></li> 
             <li><Link to={'myaccount'}>My Account</Link></li>
            </ul>

        </nav>
        
    </div>
    <div className='section'>
          <Link to={'product/:category'}> <h4>Category</h4>
          </Link>
          <Link to={'add'}><h4>Add Product</h4></Link>

        </div>
    </>
    
    
  )
}

export default Navbar