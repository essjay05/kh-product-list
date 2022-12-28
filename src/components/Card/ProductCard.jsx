import React, { useState } from 'react'
import './ProductCard.styles.css'
import MedsSvg from '../svgs/MedsSvg'

const ProductCard = ({ product }) => {

  const [productCount, setProductCount] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  const { id, formulation, img_url, name, strength, unit_price_in_cents } = { ...product }
  const convertToDollarPriceString = (cost) => `${(cost / 100).toFixed(2)}`
  const formattedFormulation = formulation.charAt(0).toUpperCase() + formulation.slice(1)
  const fullProductName = name + formattedFormulation

  // Increment product counts by 15:
  const incrementProductBy15 = () => {
    setProductCount(productCount + 15)
    console.log(productCount)
  }

  const decrementProductBy15 = () => {
    if (productCount > 0) {
      setProductCount(productCount - 15)
    }
    console.log(productCount)
  }

  
  
  return (
    <div
      className='product-card-container'
      id={id}>
      <h3>{name}</h3>
      <div className='product-icon-container'>
        <MedsSvg
          className='product-card-icon'
          height='32'
          width='32' />
      </div>
      {/* <img 
        className='card-img'
        src={img_url}
        alt={`${name} ${formulation} ${strength}`}/> */}
      <ul className='product-details-list'>
        <li>Type: {formattedFormulation}</li>
        <li>Strength: {strength}</li>
        <li>Cost: ${convertToDollarPriceString(unit_price_in_cents)} each</li>
      </ul>
      <div className='product-count-container'>
        <label>Choose your monthly quantity below (comes in sets of 15):</label>
        <div className='product-card-btn-group' aria-label={`${fullProductName} Primary Button Group`}>
          <button 
            aria-label={`Add set of 15 ${fullProductName}`}
            onClick={incrementProductBy15}>+
          </button>
          <button 
            aria-label={`Remove set of 15 ${fullProductName}`}
            onClick={decrementProductBy15}>-
          </button>
        </div>
        <p className='product-card-count'>
        Product quantity: {productCount}
        </p>
        <p className='product-card-cost'>Product card cost: $</p>
      </div>
    </div>
  )
}

export default ProductCard