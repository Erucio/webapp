import React,{useState} from 'react'
import ProductCard from './ProductCard'

function FeaturedProducts({title}) {
  const[products, setProducts] = useState([
    {id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    {id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    {id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    {id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    {id: 5, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    {id: 6, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    {id: 7, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    {id: 8, productName: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },


  ])
  return (
    <>
        <section class="featuredProducts">
            <div class="container">
                <h1>{title}</h1>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    {products.map(product=><ProductCard/>)}
         
                </div>
            </div>
        </section>
    </>
  )
}

export default FeaturedProducts