import React from 'react'
import CarouselComponent from './CarouselComponent'
import MainPageContent from './MainPageContent'
import Footer from './Footer'

const MainPage = () => {
  return (
    <div className="landing-page d-flex flex-column justify-content-center align-items-center ">
      <CarouselComponent/>
      <MainPageContent/>
      <Footer/>
    </div>
  )
}

export default MainPage
