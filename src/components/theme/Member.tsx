import React from 'react'

import abt1 from '../../../public/images/abt1.png'
import Image from 'next/image'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
          
export default async function Member() {
  
  interface Mem {  
    title: string;   
    id: string;  
    image: string; 
    designation: string;  
   } 
    const memberQuery = `*[_type == "member"]{
    image, title, id, amount, para}`;
    const memData: Mem[] = await client.fetch(memberQuery);

  return (
    <div className='conatainer max-w-[1440px] mx-auto'>
   <div className=' h-auto mb-10 data-aos="fade-up-right"'>
    <h1 className='text-green-700 text-2xl md:text-5xl text-center p-1 sm:p-3 md:p-5' id='myfont'>Our Members</h1>
    <div className='bg-green-500 md:h-[350px] h-[100px] md:ml-20 lg:ml-0'>
    <Image src={abt1} alt="" width={500} height={500} className='w-80 h-80 2xl:ml-[1100px] md:ml-[200px] lg:ml-[450px]  opacity-20 '/>
    </div>
    
    <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 p-10 md:gap-5 md:ml-20 lg:ml-5
           gap-2 -mt-28 z-1'>
    
    {memData.map((member) => 
    <div key={member.id} className='animate animated animate__backInLeft animte_delay-2s border shadow 
              w-60 lg:w-64 xl:w-72'>

    <Image src={urlFor(member.image).url()} alt='image' width={500} height={500} 
        className='md:w-80 md:h-80 w-72 h-64 xl:w-72'/>
    
    <div className='flex flex-col align-top -mt-56 md:ml-60 ml-40 '>
    <i className='bx bxl-facebook text-black hover:bg-green-600 hover:text-white p-3 mt-1'></i>
    <i className='bx bxl-instagram text-black hover:bg-green-600 hover:text-white p-3 mt-1'></i>
    <i className='bx bxl-twitter text-black hover:bg-green-600 hover:text-white p-3 mt-1'></i>
    <i className='bx bxl-youtube text-black hover:bg-green-600 hover:text-white p-3 mt-1'></i>
    </div>
    <h1 className='text-center font-bold text-xl mt-16'>{member.title}</h1>
    <p className='text-center'>{member.designation}</p>
   

</div>

)}
        
</div>
    </div>

    </div>
  )
}
