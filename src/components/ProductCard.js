import React from 'react'
import img1 from '../assets/images/designer-black-boat-neck-blouse-500x500.jpg'
import { NavLink } from 'react-router-dom'


function ProductCard() {
  return (
    
<div className="col">
    <div className="card">
        <div className="img">
            <img src={img1} alt=""></img>
            <div className="card-menu">
                <button><i className="fa-regular fa-shuffle"></i></button>
                <button><i className="fa-regular fa-heart"></i></button>
                <button><i className="fa-regular fa-cart-shopping"></i></button>        
            </div>
            <NavLink to="/products" className="btn btn-theme"> 
                  <span className="corner-topLeft"></span>
                  <span className="corner-bottomRight"></span>
                  QUICK VIEW 
            </NavLink>
        </div>
        <div class="card-body">
            <p className="card-category">Category</p>
            <h5 className="card-title">Modern Black Blouse</h5>
            <p className="card-rating">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <p className="card-price">$35</p>
        </div>
        
    </div>
</div>
    
  )
}

export default ProductCard