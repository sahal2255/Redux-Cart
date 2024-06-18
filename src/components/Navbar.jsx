import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          My Shop
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          <div className="relative">
            <FontAwesomeIcon icon={faShoppingCart} className="h-8 w-8 text-gray-700 cursor-pointer" onClick={toggleCart} />
            {showCart && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200">
                <div className="p-4">Cart Content Goes Here</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
