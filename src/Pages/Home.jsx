// src/Pages/Home.jsx

import React from 'react'
import Slider from '../Components/slider'
import SimpleReactLightbox from 'simple-react-lightbox'
import Services from '../Components/services'
import Portfolios from '../Components/portfolios'
const YouTubeCarousel = lazy(() => import('../Components/YouTubeCarousel'))
import Contact from '../Components/contact'
import Header from '../Components/header'
import Footer from '../Components/footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <SimpleReactLightbox>
        <Portfolios />
      </SimpleReactLightbox>
      <Suspense fallback={<div>Loading...</div>}>
        <YouTubeCarousel />
      </Suspense>
      <Contact />
      <Footer />
    </div>
  )
}