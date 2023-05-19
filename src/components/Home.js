import React from 'react'
import Welcome from '../pages/Welcome-area/Welcome'
import Collection from '../pages/Collection/Collection'
import Bio from '../pages/Bio/Bio'
import Youtube from '../pages/Slide-Show/Youtube/Youtube'
import SocialIcon from '../pages/SocialMediaIcon/SocialIcon'
import Subscribe from '../pages/subscribe/Subscribe'
import Footer from '../pages/Footer/Footer'
import Banner from '../pages/Banner/Banner'

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <Collection />
      <Bio />
      <Youtube />
      <SocialIcon />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home
