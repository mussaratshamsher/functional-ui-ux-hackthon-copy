


import LandingPage from '@/components/layout/LandingPage'
import FoodMenu from '@/components/theme/FoodMenu'
import React from 'react'

export default function Menu() {
  return (
    <div className='container max-w-[1440px] mx-auto'>

   <LandingPage  
    title="About Us"  
    head="About"  
    image="/images/themebg.png"  
    link="/about" />

<FoodMenu/>



    </div>
  )
}
