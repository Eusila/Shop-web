import React, { useState, useEffect } from 'react';
import { fetchLimitedProducts, deleteProduct } from '../services/Api'; 
import { Link } from 'react-router-dom'




const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('default');
  const [limit, setLimit] = useState(10); 
  const [loading, setLoading] = useState(true); // Loading state
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchLimitedProducts(limit);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, [limit]); 

  const sortProducts = (criteria) => {
    let sortedProducts = [...products];
    if (criteria === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (criteria === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortCriteria(selectedSort);
    sortProducts(selectedSort);
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value, 10)); 
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div style={styles.productList}>
      <h2>Our Products</h2>
     
      
      <div style={styles.controlContainer}>
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortCriteria} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        <label htmlFor="limit" style={{ marginLeft: '20px' }}>Show: </label>
        <select id="limit" value={limit} onChange={handleLimitChange}>
          <option value="5">5 Products</option>
          <option value="10">10 Products</option>
          <option value="20">20 Products</option>
        </select>
      </div>

      <div style={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <Link to={`/product/${product.id}`} style={styles.productLink}>
              <img src={product.image} alt={product.title} style={styles.productImage} />
             <div className="style detail"> <h3 style={styles.productTitle}>{product.title}</h3>
             <p style={styles.productDescription}>{product.description.substring(0, 100)}...</p></div>
              <strong style={styles.productPrice}>${product.price}</strong>
              
            </Link>

            <button 
              style={styles.deleteButton} 
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
   
          </div>
          
        ))}
      </div>
    </div>
  );
};

const styles = {
  productList: {
    padding: '20px',
  },
  controlContainer: {
    marginBottom: '20px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
    gap: '20px',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
  },
  productTitle: {
    fontSize: '18px',
    margin: '10px 0',
    color: 'black'
   
  },
  productDescription: {
    fontSize: '14px',
    color: '#555',
  },
  productPrice: {
    fontSize: '16px',
    color: '#000',
    fontWeight: 'bold',
  },
  productLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  deleteButton: {
    backgroundColor: 'rgb(133, 45, 45)',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    marginTop: '10px',
    borderRadius: '4px',
  },
};


export default Products;