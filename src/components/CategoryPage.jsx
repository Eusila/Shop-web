import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../services/Api';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory(category).then(data => setProducts(data));
  }, [category]);

  return (
    <div>
      <h2>Products in {category}</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;