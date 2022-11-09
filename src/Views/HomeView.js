import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import PamShowcase from '../components/PamShowcase';
import Delivery from '../components/Delivery';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import FlashSaleGrid from '../components/FlashSaleGrid';
import { FeaturedContext, FlashSaleContext} from '../contexts/contexts';


const HomeView = () => {
  const products = useContext(FeaturedContext)
  const flashSaleProducts = useContext( FlashSaleContext)

  

  return (
    <div className="HomePage">
        <Navbar/>
        <Showcase/>
        <FeaturedProducts title="Featured Products" products={products}/>
        <PamShowcase/>
        <FlashSaleGrid title="Flash Sale" products={flashSaleProducts}/>
        <Delivery/>
        <Footer/>     
    </div>
  )
}

export default HomeView