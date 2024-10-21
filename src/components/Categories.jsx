import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../services/Api';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(data => setCategories(data));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;

