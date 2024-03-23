import React from 'react'
import FooterComp from './FooterComp/FooterComp.jsx'
import CarouselComp from './CarouselComp/CarouselComp.jsx'
import HomeBody from './HomeBody/HomeBody.jsx'
import NavbarComp from './NavbarComp/NavbarComp.jsx'
export default function Home() {
  return (
    <>
    <div>
        <NavbarComp/>
        <CarouselComp/>
        <HomeBody/>
        <FooterComp/>
    </div>
    </>
  )
}
