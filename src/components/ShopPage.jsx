// src/components/ShopPage.jsx
import React from 'react';
import Navbar from './Navbar';

import Products from '../Data/Proudcts';
import { useDispatch } from 'react-redux';

export default function ShopPage() {
  console.log(Products);

  return (
    <div>
 <Navbar />

    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <div className="w-full h-48 mb-4">
              <img 
                src={product.images} 
                alt={product.title} 
                className="w-full h-full object-cover rounded-md" 
                />
            </div>
            <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
            <h5 className="text-md text-gray-500 mb-2">{product.brand}</h5>
            <p className="text-sm text-red-500 font-bold mb-2">{product.discountPercentage}% OFF</p>
            <p className="text-lg font-medium text-gray-700 mb-4">Price: ${product.price.toFixed(2)}</p>
            <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors" 
              onClick={}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
}
