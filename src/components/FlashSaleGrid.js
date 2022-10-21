import React from 'react'
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';

function bigCard() {
  return (
    <>
      <section className="flashSaleGrid">
        <div className="container">
          
          <div class="flashSaleBoxLeft">
              <h1>2 FOR USD $29</h1>
              <NavLink to="/products" end className="btn btn-theme"> 
                  <span className="corner-topLeft"></span>
                  <span className="corner-bottomRight"></span>
                  FLASH SALE
              </NavLink>
          </div>
          <div className="rightProducts">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          <div className="leftProducts">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          </div>

          <div class="flashSaleBoxRight">
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

export default bigCard