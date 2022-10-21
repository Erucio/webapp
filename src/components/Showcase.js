import React from 'react'
import img1 from '../assets/images/img-2.svg'
import img2 from '../assets/images/img-1.svg'
import { NavLink } from 'react-router-dom'


const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">
            <img src={img1} alt="Fashion" height="700"></img>
            <div className="midText">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <NavLink to="/categories" end className="btn btn-theme"> 
                  <span className="corner-topLeft"></span>
                  <span className="corner-bottomRight"></span>
                  SHOP NOW 
                </NavLink>

            </div>
            <img src={img2} alt="Fashion" height="700"></img>
        </div>
    </section>

  )
}

export default Showcase