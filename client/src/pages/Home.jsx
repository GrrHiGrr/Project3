
import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        
        <Categories />
        <Products/>
       
        <Footer/>
        </div>
  )
}

export default Home
