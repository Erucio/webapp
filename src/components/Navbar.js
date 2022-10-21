import React from 'react'
import Logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

function navbar() {
    return (
    
                <nav className="header">
                    <div className="container">
                        <div className="brand">
                            <NavLink to="/"><img src={Logo} alt="Logotype"></img></NavLink>
                        </div>

                        <div className="middleLinks">
                            <NavLink to="/" end activeClassName="Nav home"> Home </NavLink>
                            <NavLink to="/categories" end className="Nav"> Categories </NavLink>
                            <NavLink to="/products" end className="Nav"> Products </NavLink>
                            <NavLink to="/contacts" end className="Nav"> Contacts </NavLink>
                        </div>
                        <div className="right-buttons">
                            <NavLink to="/search" end><i className="fa-regular fa-search"></i></NavLink>
                            <NavLink to="/compare" end><i className="fa-regular fa-shuffle"></i></NavLink>
                            <NavLink to="/saved" end><i className="fa-regular fa-heart"></i></NavLink>
                            <NavLink to="/cart" end><i className="fa-regular fa-cart-shopping"></i></NavLink>
                        </div>
                        <div className="searchbox">
                            <input type="text" placeholder="Search Here..."></input>
                            </div>
                    </div>
                </nav>
          
            )
        }

export default navbar