import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Product.styles.css'

const Product = () => {

  const location = useLocation()
  const { id, strength, unit_price_in_cents, formattedFormulation, fullProductName } = location.state

  const [productCount, setProductCount] = useState(0)
  const [orderCost, setOrderCost] = useState('$0.00')

  // Reformatting data for use in Product page:
  const convertCentsToDollars = priceInCents => (priceInCents / 100).toFixed(2)
  const updateOrderCost = (count) => {
    const updatedCost = (count*(unit_price_in_cents/100)).toFixed(2)
    setOrderCost(`$${updatedCost}`)
  }

  // Increment/Decrement product counts by 15:
  const incrementProductBy15 = () => {
    setProductCount(productCount + 15)
    // calculateOrderCost()
    return productCount + 15
  }
  const decrementProductBy15 = () => {
    if (productCount > 0) {
      setProductCount(productCount - 15)
      return productCount - 15
    }
    return productCount
  }
  async function calculateOrderCost(event) {
    if (event.target.id === 'IncrementProductBy15') {
      try {
        const unitCount = await incrementProductBy15()
        updateOrderCost(unitCount)
      } catch (err) {
        console.error(err)
      }
    } else if (event.target.id === 'DecrementProductBy15') {
      try {
        const unitCount = await decrementProductBy15()
        updateOrderCost(unitCount)
      } catch (err) {
        console.error(err)
      }
    } else {
      console.log('Click not valid')
    }
  }

  // Logic to add to/clear cart
  // Use, but do not modify.
  const addToCart = (product_id, quantity) => {
    const msg = `Posting product, ID ${product_id}, with quantity ${quantity}.`
    console.log(msg);
  };
  const addProductOrderToCart = async () => {
    const updatedOrder = await addToCart(id, productCount)
    return updatedOrder
  }
  const emptyCart = () => {
    const emptyCount = 0
    const emptyOrderCost = '$0.00'
    setProductCount(emptyCount)
    setOrderCost(emptyOrderCost)
    return
  }
  const clearCart = async () => {
    try {
      const emptyOrder = await emptyCart()
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <main className='mt-5'>
      <h2 className='text-center'>Product Details</h2>
      <section className='product-detail-page-container my-4 py-5 px-4'>
        <div className='product-details'>
          <h3>{fullProductName}</h3>
          <ul className='product-details-list'>
            <li><strong>Type: </strong>{formattedFormulation}</li>
            <li><strong>Strength: </strong>{strength}</li>
            <li><strong>Cost per unit: </strong>${convertCentsToDollars(unit_price_in_cents)}</li>
          </ul>
        </div>
        <div className='product-order-container'>
          <label
            id='OrderCount'
            className='mb-1 mx-auto'>
            Choose your order quantity below
            <br/>(comes in sets of 15):
          </label>
          <div className='product-order-btn-group mb-1' role='group' aria-labelledby='OrderCount'>
            <button
              id='DecrementProductBy15'
              className='icon-btn mx-4'
              aria-label={`Subtract set of 15 ${fullProductName}`}
              onClick={calculateOrderCost}>-
            </button>
            <p className='product-order-count title-style-4 mt-4 col text-center'>
              Order quantity: {productCount}
            </p>
            <button
              id='IncrementProductBy15'
              className='icon-btn mx-4'
              aria-label={`Add set of 15 ${fullProductName}`}
              onClick={calculateOrderCost}>+
            </button>
          </div>
          <p className='product-order-cost text-center title-style-3'>Order cost: {orderCost}</p>
          <div className='cart-btn-group' role='group' aria-label='Update Cart button group'>
            <button
              id='AddToCart'
              className='mx-auto'
              aria-label='Add order to cart'
              onClick={addProductOrderToCart}>
              Add to Cart
            </button>
            <button
              id='ClearCart'
              className='mx-auto'
              aria-label='Clear Order'
              onClick={clearCart}>
              Empty Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Product