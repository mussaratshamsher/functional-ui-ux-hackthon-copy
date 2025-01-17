import AbtTheme from '@/components/theme/AbtTheme';
import BestPeople from '@/components/theme/BestPeople';
import ChooseUs from '@/components/theme/ChooseUs';
import FoodCategory from '@/components/theme/FoodCategory';
import FoodMenu from '@/components/theme/FoodMenu';
import Member from '@/components/theme/Member';
import Testmonial from '@/components/theme/Testmonial';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default async function Home() {

     const homeQuery = `*[_type == "homePage"]{
    image1, image2, image3, image4, image5, title,
     heading ,para,  button1, button2}`;
  
      const sanityData = await client.fetch(homeQuery)
       const[homeData] = sanityData;
      
  return (
 
    <div className='container max-w-[1440px] mx-auto'>
     <div className='h-auto w-full'>
    <div className='sm:gap-44 lg:gap-10 md:mt-10 md:grid md:grid-cols-2 flex flex-col-reverse mt-2'>

{/* grid 1 */}

<div className='sm:ml-20 md:ml-5 lg:ml-20 ml-2'>
  <h1 id='myfont' className='text-green-800'>{homeData.title} 
  <hr className='md:w-20 w-5 -mt-2 ml-64 border border-green-800'/></h1>
<h1 className='flex flex-row sm:text-3xl md:text-4xl lg:text-5xl text-2xl md:font-bold font-semibold mt-4 md:mt-10'>
  {homeData.heading} <Sparkles className='text-green-600'/> 
</h1>
<p className='md:mt-10 sm:mt-5'> {homeData.para} </p>

  <div className='grid grid-cols-1 sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-20  mt-5 ml-14 md:ml-0'>
  <Button>{homeData.button1}</Button>
  <Button variant={'ghost'} className='lg:-ml-[100px]'>{homeData.button2}</Button>
  </div>
  </div >

{/* grid 2 */}

<div className='relative md:ml-0 ml-[100px] mt-2 md:mt-0'>

<Image src={urlFor(homeData.image1).url()} 
       alt={homeData.title} width={500} height={500}
 className='relative w-[450px] sm:w-[1000px] sm:h-[400px] md:w-[1000px] md:h-[500px] md:-mt-8 -z-10 top-0 '/>

<div className='flex flex-row'>

<Image src={urlFor(homeData.image2).url()} 
       alt={homeData.title} width={500} height={500} 
       className='absolute w-[150px] md:w-[400px] md:-mt-[480px] -mt-40 md:ml-10 ml-3' id='rotateImage'/>

<Image src={urlFor(homeData.image3).url()} 
       alt={homeData.title} width={500} height={500} 
className='absolute md:-mt-[520px] md:-ml-[60px] md:w-[300px] w-32 -mt-48 -ml-5 -z-10'/>


<Image src={urlFor(homeData.image4).url()} 
       alt={homeData.title} width={500} height={500} 
       className='absolute md:-mt-[300px] md:ml-[50px] -z-10 md:w-[300px] w-32 -mt-24 ml-10   '/>

<Image src={urlFor(homeData.image5).url()} 
       alt={homeData.title}width={500} height={500}
        className='absolute md:-mt-[400px] md:-ml-[70px] -z-10 md:w-[300px] w-32 -mt-32 -ml-8'/>

</div>


</div>
</div>

    <div className="mt-24 md:-mt-10">
     <AbtTheme/>
     </div>
   <FoodCategory/>
   <ChooseUs/>
   <FoodMenu/>

   <Member />

{/* testimonials  */}

  <Testmonial/>
 {/* <LatestBlog/> */}

  <BestPeople/>

  </div>

 </div>
  )
}
