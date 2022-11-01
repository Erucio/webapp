import './App.css';
import React, {useState} from 'react';
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
import { ProductContext } from './contexts/contexts';
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = useState({allProducts:[], featuredProducts:[],
    //flashGridProducts:[]  
  })
  useEffect (() => {
    const fetchAllProducts = async () => {
      let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, allProducts: await result.json()})
    }
    fetchAllProducts()

  const fetchFeaturedProducts = async () => {
    let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products?take=8')
    setProducts({...products, featuredProducts: await result.json()})
  }

  fetchFeaturedProducts()
},[setProducts])


  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
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
            <Route path="products/:id" element={<ProductDetailView/>} />
          </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
