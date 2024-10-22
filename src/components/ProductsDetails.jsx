import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../services/Api";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, [id]);

  return (
    <div className="product">
      {product ? (
        <>
          <img src={product.image} alt={product.title} />
          <div className="Detail">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <strong>
              <p>${product.price}</p>
            </strong>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default ProductDetails;
