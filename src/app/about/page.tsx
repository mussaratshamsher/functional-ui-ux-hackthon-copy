import AbtTheme from '@/components/theme/AbtTheme'
import Member from '@/components/theme/Member'
import Testmonial from '@/components/theme/Testmonial'
import Student from '../../../public/images/Student.png'
import Person from '../../../public/images/Person.png'
import Coffee from '../../../public/images/Coffee.png'
import Image from 'next/image'
import React from 'react'
import LandingPage from '@/components/layout/LandingPage'

export default function About() {
  return (
    <div className='container max-w-[1440px] mx-auto'>

<LandingPage  
    title="About Us"  
    head="About"  
    image="/images/themebg.png"  
    link="/about" />

<AbtTheme />

{/* why choose use  */}

  
<div className='grid md:grid-cols-3 grid-cols-1 mt-5 md:pl-32 md:pr-32 '>

<div className='text-center'>
  <Image src={Student} alt='' width={500} height={500} className='w-20 h-20 ml-32 md:ml-14 lg:ml-24' />
<h1 className='text-2xl font-bold'> Home Chef</h1>
<p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
  </div>
  <div className='text-center'>
  <Image src={Coffee} alt='' width={500} height={500} className='w-20 h-20 ml-32 md:ml-14 lg:ml-24 2xl:ml-40' />
<h1 className='text-2xl font-bold'>Quality food</h1>
<p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
  </div>
  <div className='text-center'>
  <Image src={Person} alt='' width={500} height={500} className='w-20 h-20 ml-32 md:ml-14 lg:ml-24 2xl:ml-40' />
<h1 className='text-2xl font-bold'>Home Delivery</h1>
<p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
  </div>

</div>

{/* memeber  */}

<Member />

<Testmonial />


    </div>
  )
}
