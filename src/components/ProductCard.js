import React from 'react'
import { NavLink } from 'react-router-dom'


const ProductCard = ({product}) => {
  return (
    
<div className="col">
    <div className="card">
        <div className="img">
            <img src={product.imageName} alt={product.name}></img>
            <div className="card-menu">
                <button><i className="fa-regular fa-shuffle"></i></button>
                <button><i className="fa-regular fa-heart"></i></button>
                <button><i className="fa-regular fa-cart-shopping"></i></button>        
            </div>
            <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn btn-theme"> 
                  <span className="corner-topLeft"></span>
                  <span className="corner-bottomRight"></span>
                  QUICK VIEW 
            </NavLink>
        </div>
        <div className="card-body">
            <p className="card-category">{product.category}</p>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-rating">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <p className="card-price">${product.price}</p>
        </div>
        
    </div>
</div>
    
  )
}

export default ProductCard