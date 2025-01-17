import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Page {
    title: string,
    head: string,
    image: string,
    link: string,
}
export default function LandingPage(data: Page) {
    
     const {title, head, image, link} = data;
  return (
    <div>

<div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl md:ml-[500px]'>{title}</h1>
<Image src={image} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href={link} className='text-white'> {head}</Link></div>
</div>

    </div>
  )
}
