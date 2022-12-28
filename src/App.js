import React, { useEffect, useState } from 'react';

import ProductCard from './components/Card/ProductCard';
import './App.css';

function App() {

  // Use, but do not modify.
  const getProducts = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "Apoquel",
            strength: "3.6mg",
            formulation: "chewable tablet",
            unit_price_in_cents: 200,
            img_url: "https://www.fillmurray.com/200/300"
          },
          {
            id: 2,
            name: "Apoquel",
            strength: "5.4mg",
            formulation: "chewable tablet",
            unit_price_in_cents: 220,
            img_url: "https://www.fillmurray.com/240/240"
          },
          {
            id: 3,
            name: "Apoquel",
            strength: "16mg",
            formulation: "chewable tablet",
            unit_price_in_cents: 400,
            img_url: "https://www.fillmurray.com/260/200"
          },
          {
            id: 4,
            name: "Apoquel",
            strength: "3.6mg",
            formulation: "caplet",
            unit_price_in_cents: 100,
            img_url: "https://www.placecage.com/200/300"
          },
          {
            id: 5,
            name: "Apoquel",
            strength: "5.4mg",
            formulation: "caplet",
            unit_price_in_cents: 130,
            img_url: "https://www.placecage.com/240/240"
          },
          {
            id: 6,
            name: "Apoquel",
            strength: "16mg",
            formulation: "caplet",
            unit_price_in_cents: 210,
            img_url: "https://www.placecage.com/260/200"
          },
        ])}, 1000)
      }
    )
  }

  // Use, but do not modify.
  const addToCart = (product_id, quantity) => {
    const msg = `Posting product, ID ${product_id}, with quantity ${quantity}.`
    console.log(msg);
  };

  const [products, setProducts] = useState([])
  console.log(products)

  async function getProductsData() {
    const results = await getProducts()
    setProducts(results)
  } 


  useEffect(() => {
    getProductsData()
  }, [])

  return (
    <div className="App">
      <h1>Koala Health Products</h1>
      {products.length > 0 ?
        <div className='product-list-container'>
          <h2>Products List Container</h2>
          <div className='products-list'>
            {
              products.map((prod) => {
                return (
                  <ProductCard
                    key={prod.id}
                    id={prod.id}
                    product={prod}/>
                )
              })
            }
          </div>
        </div>:
        <div className='product-list-container'>
          <h2>No products found</h2>
        </div>
      }
    </div>
  );
}

export default App;
