import React from 'react'
import './FoodItem.css'

const FoodItem = (id,name,price,image) => {
  return (
    <div className='food-item'>

        <div className="food-item-image-container">
            <img src={image} alt="" className="food-item-image" />
        </div>
        <div className="food-item-info">
            
                <p>{name}</p>
                
        
            <p className="food-item-price">{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
