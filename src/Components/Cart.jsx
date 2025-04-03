import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/store';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const decrementQuantity = (id) => {
    dispatch(addToCart({ id, decrement: true }));
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} style={{ width: '20vh', height: '20vh' }} />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>Price: Rs. {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id)}>
                      <FaMinus />
                    </button>
                    <button style={{marginLeft: '20px'}} className="add-to-cart-button" onClick={() => dispatch(addToCart({ id: item.id }))}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="cart-total">Total: Rs. {calculateTotal()}</h2>
          <button className="place-order-button" onClick={() => alert('Order placed successfully!')}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;