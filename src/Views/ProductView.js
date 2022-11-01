import React, {useContext} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../contexts/contexts';
import FeaturedProducts from '../components/FeaturedProducts'


const ProductView = () => {
  const products = useContext(ProductContext)
  return (
    <div>
    <Navbar/>
    <div className="container" style={{"width" : "1110px"}}>
      <div className="icon">
          <NavLink to={"/"}><i className="fa-solid fa-home"></i></NavLink>
          <p> Products </p>
      </div>
    </div>
    <FeaturedProducts title="All Products" products={products.allProducts}/>
    <Footer/>
  </div>
  )
}

export default ProductView