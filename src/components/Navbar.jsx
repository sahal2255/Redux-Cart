import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems } from '../Redux/cart/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {increaseQuantity,decreaseQuantity} from '../Redux/cart/cartSlice'
function Navbar() {
  const dispatch = useDispatch();

  const cart = useSelector(selectCartItems);
  const cartItemCount = cart.length; 
  // const cartQuantity=cart.reduce((total, item) => total + item.quantity, 0)
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const decrement=(id)=>{
    dispatch(increaseQuantity(id))
  }
const increment=(id)=>{
  dispatch(decreaseQuantity(id))
}
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
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartItemCount}
              </span>
            )}
            {showCart && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200">
                <div className="p-4">
                  {cart.length === 0 ? (
                    <div>Your cart is empty.</div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex items-center mb-4">
                      <img 
                        src={item.images} 
                        alt={item.title} 
                        className="w-12 h-12 object-cover rounded mr-4" 
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <div className="flex items-center mt-1">
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          <button 
                            className="ml-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full h-6 w-6 flex items-center justify-center"
                            onClick={()=>decrement(item.id)}
                          >
                            -
                          </button>
                          <p className="mx-2">{item.quantity}</p>
                          <button 
                            className="ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full h-6 w-6 flex items-center justify-center"
                            onClick={()=>increment(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
