import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Products from '../components/Product'
import MyAccount from '../pages/MyAccount'
import Home from '../pages/Homepage/Home'
import ProductDetails from '../components/ProductsDetails'
import CategoryPage from '../components/CategoryPage'
import AddProduct from '../components/AddProduct'
import Categories from '../components/Categories'
import Cart from '../components/cart/Cart'

function Root() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="products" element={<Products />}/>
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="categories" element={<Categories/>} />
        <Route path="product/:category" element={<CategoryPage/>} />
        <Route path="add" element={<AddProduct />}/>
        <Route path="cart" exact element={<Cart />} />
        
      

    </Routes>
  )
}

export default Root