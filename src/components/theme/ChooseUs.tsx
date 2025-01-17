import Image from 'next/image'
import React from 'react'

import abthome3 from '../../../public/images/abthome3.png'
import choose1 from '../../../public/images/choose1.png'
import chooseback from '../../../public/images/chooseback.png'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'


export default async function ChooseUs() {

    const chooseQuery = `*[_type == "chooseUs"]{
          image1, image2, image3, image4, image5, image6,
         image7, title, para, }`;
        
            const sanityData = await client.fetch(chooseQuery)
             const[chooseData] = sanityData;
  return (
<div className='container max-w-[1440px] mx-auto'>

<div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-5'>

{/* grid 1  */}

<div className='p-5 md:pl-28 md:pt-32 md:ml-5'>
<Image src={chooseback} alt='' width={100} height={100} 
className='w-40 2xl:w-[300px] ml-[80px] md:ml-20 absolute -mt-12 md:-mt-4 -z-10 xl:ml-32 '/>

 <div className='flex '>
<Image src={choose1} alt='' width={100} height={100}  
className='md:w-[200px] w-[150px] 
animate animated animate__backInLeft animate__delay-7s'/>

<Image src={abthome3} alt='' width={100} height={100}
className='w-[150px] md:w-[200px] relative top-10 -ml-8 md:top-20 md:-ml-16 
animate animated animate__backInRight animate__delay-7s'/> 
</div>
</div>

{/* grid 2  */}
<div className='md:pr-28'>
<h2 id='myfont' className='text-green-800 mt-10 md:mt-14 ml-5 2xl:text-8xl 2xl:mt-40'> Why Choose Us!<hr className='md:w-10 w-5 -mt-5 md:ml-32 ml-20 border border-green-800'/></h2>
<h1 className='text-1xl md:text-3xl font-bold md:mt-5 mt-3 ml-3 2xl:mt-20 mb-2 md:mb-5'>{chooseData.title}</h1>
<p className=' ml-2 w-90 flex text-center'>{chooseData.para}</p>

{/* OPTIONS  */}
<div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 ml-5'>

<Image src={urlFor(chooseData.image4).url()} alt={chooseData.title} width={500} 
height={500} className='w-60 md:w-72 h-24'/> 
<Image src={urlFor(chooseData.image5).url()} alt={chooseData.title} width={500} 
height={500} className='w-60 md:w-72 h-24'/> 
<Image src={urlFor(chooseData.image6).url()} alt={chooseData.title} width={500} 
height={500} className='w-60 md:w-72 h-24'/> 
<Image src={urlFor(chooseData.image7).url()} alt={chooseData.title} width={500} 
height={500} className='w-60 md:w-72 h-24'/> 

</div>


</div>

  </div>

    </div>
  )
}
