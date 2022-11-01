import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import PamShowcase from '../components/PamShowcase';
import Delivery from '../components/Delivery';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import FlashSaleGrid from '../components/FlashSaleGrid';
import { ProductContext } from '../contexts/contexts';


const HomeView = () => {
  const products = useContext(ProductContext)

  return (
    <div className="HomePage">
        <Navbar/>
        <Showcase/>
        <FeaturedProducts title="Featured Products" products={products.featuredProducts}/>
        <PamShowcase/>
        <FlashSaleGrid title="Flash Sale" products={products.featuredProducts}/>
        <Delivery/>
        <Footer/>     
    </div>
  )
}

export default HomeView