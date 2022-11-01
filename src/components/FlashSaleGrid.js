import React from 'react'
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';

const FlashSaleGrid = ({products = []}) => {
  return (
    <>
      <section className="flashSaleGrid">
        <div className="container">
          
          <div className="flashSaleBoxLeft">
              <h1>2 FOR USD $29</h1>
              <NavLink to="/products" end className="btn btn-theme"> 
                  <span className="corner-topLeft"></span>
                  <span className="corner-bottomRight"></span>
                  FLASH SALE
              </NavLink>
          </div>
          <div className="rightProducts">
          {products.map(product => <ProductCard key={product.articleNumber} product={product} />)}

          </div>
          <div className="leftProducts">
          {products.map(product => <ProductCard key={product.articleNumber} product={product} />)}

          </div>

          <div className="flashSaleBoxRight">
              <h1>2 FOR USD $49</h1>
              <NavLink to="/products" end className="btn btn-theme"> 
                  <span className="corner-topLeft"></span>
                  <span className="corner-bottomRight"></span>
                  FLASH SALE
              </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default FlashSaleGrid