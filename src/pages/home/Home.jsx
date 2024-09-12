import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import ProductGrid from '../../components/produit/Produit';
import Footer from '../../components/footer/Footer';
import Aboutus from '../../components/aboutus/Aboutus';
import Contact from '../../components/contact/contact';
import "./home.css"
function Home({ addToCart, cartItems }) {
    return (
  
        <div>
            <Navbar cartItems={cartItems}/>
            <Header/>
            <ProductGrid addToCart={addToCart} />
            <Aboutus/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Home; 