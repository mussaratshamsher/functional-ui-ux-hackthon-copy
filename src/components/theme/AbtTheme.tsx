
import 'animate.css';
import Image from 'next/image'
import React from 'react'

import { Button } from '../ui/button'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default async function AbtTheme() {
  const abtThemeQuery = `*[_type == "abtTheme"]{
      image1, image2, image3, title,
       heading ,para,  button1, button2}`;
    
        const sanityData = await client.fetch(abtThemeQuery)
         const[themeData] = sanityData;
  return (
  <div className='max-w-[1440px] container mx-auto'>
    <div  className='grid grid-cols-1 md:grid-cols-2'>
{/* Image section */}
<div className='grid grid-cols-2 md:mt-32 -mt-20 md:ml-36 ml-3 2xl:ml-40 md:gap-5 gap-2'>
    
   <div className='animate__animated animate__zoomIn animate__delay-2s col-span-1 row-span-2'>
    <Image src={urlFor(themeData.image1).url()} alt={themeData.title} width={500} height={500}
     className='md:w-[300px] md:h-[450px] 2xl:w-[500px] 2xl:h-[900px] w-[150px] h-[250px]'/></div> 

   <div className='animate__animated animate__zoomIn animate__delay-2s mt-5 lg:mt-10'>
    <Image src={urlFor(themeData.image2).url()} alt={themeData.title} width={500} height={500} 
    className='md:w-[250px] md:h-[200px] 2xl:w-[350px] 2xl:h-[450px] w-[120px] h-[100px]'/></div>

   <div className='animate__animated animate__zoomIn animate__delay-2s row-span-2'>
    <Image src={urlFor(themeData.image2).url()} alt={themeData.title} width={500} height={500} 
    className='md:w-[250px] md:h-[300px] 2xl:w-[350px] 2xl:h-[500px] w-[120px] h-[150px] '/></div>
   </div>

{/* text section */}


<div className=' md:ml-8 ml-3 -mt-10 2xl:mt-[300px]'>
<h1 id='myfont' className='text-green-800 md:mt-40 2xl:text-8xl '> {themeData.title} 
    <hr className='md:w-10 w-5 -mt-5 md:ml-32 ml-20 border border-green-800'/></h1>

<h1 className='flex flex-row md:text-4xl text-1xl md:font-bold font-semibold mt-4 md:mt-10'>{themeData.heading}</h1>

<p className='mt-10 p-3 md:p-3 2xl:p-10 text-center '> {themeData.para}</p>

<div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-5 md:ml-2 ml-2 2xl:ml-5'>
  <Button >{themeData.button1}</Button> 
  <Button className='2xl:-ml-[400px] ' variant={'ghost'} >{themeData.button2}</Button> </div>
</div>

    

    </div>

    </div>
  )
}
