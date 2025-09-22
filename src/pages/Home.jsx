import React from 'react'
import HeroSlider from '../components/Home/HeroSlider'
import FeaturedArea from '../components/Home/FeaturedArea'
import ProductTabs from '../components/Home/ProductTabs'
import CategoryBanner from '../components/Home/CategoryBanner'
import Category from '../components/Home/Category'
import Testimonials from '../components/Home/Testimonials'
import Newsletter from '../components/Home/Newsletter'


const Home = () => {
  return (
    <>
      <HeroSlider />
      <FeaturedArea />
      <Category />
      <ProductTabs />
      <CategoryBanner />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default Home