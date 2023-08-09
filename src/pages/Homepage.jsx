import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories';
import AllProducts from './AllProducts';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer/Footer';


const Homepage = () => {
  return (
    <div>
   {/* <Announcement/> */}
   <AllProducts/>
   {/* <Newsletter/> */}
   {/* <Categories/> */}
   {/* <Slider/> */}
   <Footer/>
  </div>
);
}

export default Homepage