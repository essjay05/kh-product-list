import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../components/Card/ProductCard.styles.css'

const Product = () => {

  const location = useLocation()
  console.log(location.state)
  const { id, name, strength, formulation, unit_price_in_cents, formattedFormulation, fullProductName } = location.state

  const [loading, setLoading] = useState(true)
  const [productCount, setProductCount] = useState(0)
  const [orderCost, setOrderCost] = useState(0)

  // Reformatting data for use in Product page:
  const convertCentsToDollars = priceInCents => (priceInCents / 100).toFixed(2)
  // const formatPricing = (priceInCents) => {
  //   const dollarAmount = convertCentsToDollars(priceInCents)
  //   const 
  // } 


  // Increment/Decrement product counts by 15:
  const incrementProductBy15 = () => {
    setProductCount(productCount + 15)
    // calculateOrderCost()
    console.log(`productCount: ${productCount}`)
    return productCount
  }

  const decrementProductBy15 = () => {
    if (productCount > 0) {
      setProductCount(productCount - 15)
    }
    // calculateOrderCost()
    console.log(`productCount: ${productCount}`)
    return productCount
    
  }


  // // Calculate cost with quantity update:
  // const calculateOrderCost = async(event) => {
  //   // multiply productQuantity by unitPrice
  //   productCount * unit_price_in_cents
  //   // console.log(event.target)
  //   if (event.target.id === 'incrementProductBy15') {
  //     await incrementProductBy15()
  //     let increasedOrderString = convertToDollarPriceString(productCount * unit_price_in_cents)
  //     console.log('increased order' + increasedOrderString)
  //     setorderCost(increasedOrderString)
  //   } else if (event.target.id === 'decrementProductBy15') {
  //     await decrementProductBy15()
  //     convertToDollarPriceString(productCount * unit_price_in_cents)
  //     let decreasedOrderString = convertToDollarPriceString(productCount * unit_price_in_cents)
  //     console.log('decreased order' + decreasedOrderString)
  //     setorderCost(decreasedOrderString)
  //   }
  //   console.log(`unit_price_in_cents: ${unit_price_in_cents} `)

  // }

  return (
    <section className='product-detail-page-container'>
      <div className='product-details'>
        <h2>Product: {fullProductName}</h2>
        <ul className='product-details-list'>
          <li><strong>Type: </strong>{formattedFormulation}</li>
          <li><strong>Strength: </strong>{strength}</li>
          <li><strong>Cost per unit: </strong>${convertCentsToDollars(unit_price_in_cents)}</li>
        </ul>
      </div>
      <div className='product-order-container'>
        <label>Choose your monthly quantity below (comes in sets of 15):</label>
        <div className='product-card-btn-group' aria-label={`${fullProductName} Primary Button Group`}>
          <button
            id='incrementProductBy15' 
            aria-label={`Add set of 15 ${fullProductName}`}
            onClick={incrementProductBy15}>+
          </button>
          <button
            id='decrementProductBy15' 
            aria-label={`Remove set of 15 ${fullProductName}`}
            onClick={decrementProductBy15}>-
          </button>
        </div>
        <p className='product-card-count'>
        Product quantity: {productCount}
        </p>
        <p className='product-card-cost'>Product cost: {orderCost}</p>
      </div>
    </section>
  )
}

export default Product