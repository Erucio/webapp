import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const SavedView = () => {
  return (
    <div className="ShortPage">
      <Navbar/>
      <div className="container" style={{"width" : "1110px"}}>
        <div className="icon">
            <NavLink to={"/"}><i className="fa-solid fa-home"></i></NavLink>
            <p> Saved </p>
        </div>
      </div>

      <Footer/>
    </div>

  )
}

export default SavedView