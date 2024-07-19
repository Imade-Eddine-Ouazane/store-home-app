import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Aboutus from '../../components/aboutus/Aboutus';
import Contact from '../../components/contact/contact';

function Home() {
    return (
  
        <div>
            <Navbar/>
            <Header/>
            <Aboutus/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Home;