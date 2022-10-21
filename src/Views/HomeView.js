import React from 'react'
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import PamShowcase from '../components/pamShowcase';
import Delivery from '../components/Delivery';
import Footer from '../components/footer';
import FeaturedProducts from '../components/FeaturedProducts';
import FlashSaleGrid from '../components/FlashSaleGrid';


function homeview() {
  return (
    <div className="HomePage">
        <Navbar/>
        <Showcase/>
        <FeaturedProducts title="Featured Products"/>
        <PamShowcase/>
        <FlashSaleGrid/>
        <Delivery/>
        <Footer/>
        
    </div>
  )
}

export default homeview