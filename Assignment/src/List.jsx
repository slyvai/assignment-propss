import React from 'react';
import ProductList from './ProductList.jsx';

function App() {
  const products = [
    { name: 'Apple', price: 1.0 },
    { name: 'Banana', price: 0.5 },
    { name: 'Cherry', price: 2.0 },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;