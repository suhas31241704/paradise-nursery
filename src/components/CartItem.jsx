import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeItem } from '../slices/CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="nav-left">
          <h2>🌿 Paradise Nursery</h2>
        </div>
        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/">Plants</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart <span className="cart-count">{totalQuantity}</span>
          </Link>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty!</p>
            <Link to="/" className="continue-btn">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecrease(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrease(item.id)}>+</button>
                    </div>
                  </div>
                  <button className="delete-btn" onClick={() => handleRemove(item.id)}>🗑️</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
              <div className="cart-buttons">
                <Link to="/" className="continue-btn">Continue Shopping</Link>
                <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;