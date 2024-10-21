const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
};

export const fetchProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  return response.json();
};

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  return response.json();
};

export const addProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};


export const fetchLimitedProducts = async (limit) => {
  const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch limited products');
  }
  return response.json();
};
 