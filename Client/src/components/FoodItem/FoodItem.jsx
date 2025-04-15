import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';



const FoodItem = ({ id, name, image, price, rating }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  const itemCount = cartItems?.[id] || 0;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={url + "/images/" + image} alt={name} />
        {itemCount}

        {!itemCount ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add Item"
            style={{ width: "32px", height: "32px", objectFit: "cover", borderRadius: "10px" }}
          />
        ) : (
          <div className="counter-controls">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove Item"
              style={{ width: "32px", height: "32px" }}
            />
            <p>{itemCount}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add Item"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
        )}
      </div>

      <div className="food-item-content">
        <h3>{name}</h3>
        <div className="rating">⭐⭐⭐⭐⭐ {rating}</div>
        <p>Fruits provide essential nutrients for overall health, energy levels, and a nutritious diet.</p>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};




export default FoodItem
