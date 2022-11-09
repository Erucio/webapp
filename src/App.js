import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import ContactsView from './Views/ContactsView';
import NotFoundView from './Views/NotFoundView';
import CategoriesView from './Views/CategoriesView';
import ProductView from './Views/ProductView';
import SearchView from './Views/SearchView';
import CompareView from './Views/CompareView';
import SavedView from './Views/SavedView';
import CartView from './Views/CartView';
import ProductDetailView from './Views/ProductDetailView';
import { ProductContext, FeaturedContext, FlashSaleContext } from './contexts/contexts';

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [flashSale, setFlashSale] = useState([])



  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchFlashSaleData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setFlashSale(await result.json())
    }
    fetchFlashSaleData()
 

  }, [setProducts, setFeatured, setFlashSale,])  



  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
      <FeaturedContext.Provider value={featured}>
      <FlashSaleContext.Provider value={flashSale}>

          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/categories" element={<CategoriesView />} />
            <Route path="/products" element={<ProductView />} />
            <Route path="/contacts" element={<ContactsView />} />
            <Route path="/search" element={<SearchView />} />
            <Route path="/compare" element={<CompareView />} />
            <Route path="/Saved" element={<SavedView />} />
            <Route path="/Cart" element={<CartView />} />
            <Route path="*" element={<NotFoundView />} />
            <Route path="products/:Name" element={<ProductDetailView/>} />
          </Routes>

      </FlashSaleContext.Provider>
      </FeaturedContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
