import React from 'react'
import ProductCard from './ProductCard'

const FeaturedProducts = ({title, products}) => {
  return (
    <>
        <section className="featuredProducts">
            <div className="container">
                <h1>{title}</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.map(product => <ProductCard key={product.id} product={product} />)}
                    
         
                </div>
            </div>
        </section>
    </>
  )
}

export default FeaturedProducts