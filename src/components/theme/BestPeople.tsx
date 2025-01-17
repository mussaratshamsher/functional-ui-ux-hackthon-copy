import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'
import React from 'react'

export default async function BestPeople() {
  const peopleQuery = `*[_type == "bestPeople"]{
            image1, image2, image3, image4, image5, image6,
           heading, title,  }`;
          
              const sanityData = await client.fetch(peopleQuery)
               const[peopleData] = sanityData;
  return (
    <div className='h-auto'>
<h2 id='myfont' className='text-green-800 mt-3 md:mt-28 mb-10 text-center'>{peopleData.title} </h2>
<h1 className='text-center mt-2 md:text-2xl text-xs font-semibold'>{peopleData.heading}</h1>

<div className='grid grid-cols-2 md:grid-cols-6 ml-9 p-5 md:mb-5 mb-2' >

<Image src={urlFor(peopleData.image1).url()} alt=''
width={500} height={500} className='w-20 h-20' />

<Image src={urlFor(peopleData.image2).url()} alt=''
width={500} height={500} className='w-20 h-20' />

<Image src={urlFor(peopleData.image3).url()} alt='' 
width={500} height={500} className='w-20 h-20' />

<Image src={urlFor(peopleData.image4).url()} alt='' 
width={500} height={500} className='w-20 h-20' />

<Image src={urlFor(peopleData.image5).url()} alt=''
width={500} height={500} className='w-20 h-20' />

<Image src={urlFor(peopleData.image6).url()} alt='' 
width={500} height={500} className='w-20 h-20' />




</div>
 
    </div>
  )
}
