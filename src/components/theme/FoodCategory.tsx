import Image from 'next/image'
import React from 'react'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default async function FoodCategory() {
    interface Categ {  
        title: string;   
        id: string;  
        image: string; 
        para: string;  
        amount: string ;
    } 
          const categoryQuery = `*[_type == "category"]{
          image, title, id, amount, para}`;
        
          const sanityData:Categ[] = await client.fetch(categoryQuery);
  return (
<div className="container mx-auto max-w-[1440px]">
    <div className='mt-5'>
<h1 className='text-1xl md:text-3xl font-bold text-center p-2'>Food Category</h1>
<p className='text-center mb-4 mt-2 p-2'>Lorem Ipsum is simply dummy text of dummy text of 
  <br />the printing and type setting industry.</p>

<div className='grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5 lg:gap-2 2xl:gap-5 lg:ml-0 ml-4'>

{sanityData.map((category) => 
 <div key={category.id} className='animate_animated animate__bounceIn animate__delay-5s 5s text-center'>

    <Image src={urlFor(category.image).url()} alt='image' width={100} height={100} 
    className='md:w-[270px] md:h-[300px] w-[200px] h-[170px] ml-10' />
    <h1 className='text-1xl md:text-2xl font-bold text-center 2xl:-ml-40 mt-3'>{category.title}</h1>
<p className='text-center mb-4 mt-2 2xl:-ml-32'>{category.amount}</p>
</div>

)}


  </div>
</div>
    </div>
  )
}
