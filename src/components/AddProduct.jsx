import React, { useState } from 'react';
import { addProduct } from '../services/Api';
import './Add.css'

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({
      title: '',
      price: '',
      description: '',
      category: '',
      image: '',
    });
  
    const handleChange = (e) => {
      setNewProduct({
        ...newProduct,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addProduct(newProduct).then(() => alert('Product added successfully!'));
    };
  
    return (
      <div className='form'>
 <form onSubmit={handleSubmit}>
        <div className='form-content'>
        <input name="title" onChange={handleChange} placeholder="Title" /><br />
        <input name="price" onChange={handleChange} placeholder="Price" />
        <textarea name="description" onChange={handleChange} placeholder="Description" />
        <input name="category" onChange={handleChange} placeholder="Category" />
        <input name="image" onChange={handleChange} placeholder="Image URL" /><br />
        <button type="submit">Add Product</button>
        </div>
      </form>
   
      </div>
      );
  };
  
  export default AddProduct;