import React from 'react';
import ProductList from './ProductList';

function App() {
  const products = [
    { name: 'Apple', inStock: true },
    { name: 'Banana', inStock: false },
    { name: 'Cherry', inStock: true },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;