import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import  Categories from '../Components/Categories';
import  Products from '../Components/Products'
import React from 'react'
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
function Home() {
  return (
    <div>
      hi
      
      <Announcement />
      <Navbar />
      <Categories/>
      {/* <Slider/> */}
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Home;
