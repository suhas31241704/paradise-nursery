
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>🌿 About Paradise Nursery</h1>
        <p>Bringing Nature to Your Doorstep Since 2024</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Welcome to Paradise Nursery! We are a passionate team of plant lovers dedicated to 
            providing high-quality, healthy, and beautiful plants to every home. 
            Whether you are a seasoned gardener or just starting your green journey, 
            we have the perfect plant for you.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to make the world greener, one plant at a time. 
            We believe that plants bring peace, improve air quality, and make spaces feel alive. 
            That's why we carefully source each plant and ensure it reaches you in perfect condition.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="features-list">
            <li>🌱 100% Healthy & Fresh Plants</li>
            <li>🚚 Fast & Safe Delivery</li>
            <li>💚 Eco-Friendly Packaging</li>
            <li>📞 24/7 Customer Support</li>
            <li>💰 Affordable Prices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
