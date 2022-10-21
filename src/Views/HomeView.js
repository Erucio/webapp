import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import PamShowcase from '../components/pamShowcase';
import Delivery from '../components/Delivery';
import Footer from '../components/footer';
import FeaturedProducts from '../components/FeaturedProducts';
import FlashSaleGrid from '../components/FlashSaleGrid';


const HomeView = () => {
  const[products, setProducts] = useState ([
    {id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/10029277/pexels-photo-10029277.jpeg" },
    {id: 2, productName: "Modern Yellow Dress", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    {id: 3, productName: "Modern Peach Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?cs=srgb&dl=pexels-lucas-queiroz-1852382.jpg&fm=jpg&_gl=1*buy7bn*_ga*MTczOTQ0NDkzLjE2NjI1NDEwOTA.*_ga_8JE65Q40S6*MTY2NjM1Njc4MC4yLjEuMTY2NjM1Nzc4OS4wLjAuMA.." },
    {id: 4, productName: "Modern Denim Jacket", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    {id: 5, productName: "Modern Yellow Sweatshirt", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2181872/pexels-photo-2181872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 6, productName: "Modern Black Jacket", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/449977/pexels-photo-449977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    {id: 7, productName: "Modern Pink Dress", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    {id: 8, productName: "Modern Summer Top", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1805411/pexels-photo-1805411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    
  ])

  return (
    <div className="HomePage">
        <Navbar/>
        <Showcase/>
        <FeaturedProducts title="Featured Products" products={products}/>
        <PamShowcase/>
        <FlashSaleGrid title="Flash Sale" products={products}/>
        <Delivery/>
        <Footer/>
        
    </div>
  )
}

export default HomeView