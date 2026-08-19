import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../slices/CartSlice';
import { plants } from '../data';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const getCategories = () => {
    const categories = [...new Set(plants.map(p => p.category))];
    return categories;
  };

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="product-page">
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

      <div className="product-container">
        <h1>Our Plants</h1>
        {getCategories().map(category => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            <div className="plant-grid">
              {plants.filter(p => p.category === category).map(plant => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    {addedItems.includes(plant.id) ? 'Added ✅' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;