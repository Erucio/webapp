import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductDetail from '../components/ProductDetail'

const ProductDetailView = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/`)
        setProduct(await result.json())
    }
    fetchData()
}, [])


  return (
    <div>
        <Navbar currentPage="Products"/>
        <ProductDetail product={product}/>
        <Footer/>
    </div>
  )
}

export default ProductDetailView