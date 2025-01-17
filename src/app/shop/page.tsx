import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'animate.css'
import banner from '../../../public/images/banner.png'
import shopG2 from '../../../public/images/shopG2.png'

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import LandingPage from '@/components/layout/LandingPage'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default async function Shop() {

  interface Product {  
    title: string;  
    name: string;  
    id: string;  
    image: string; 
    description: string;  
    price: number ;
}  
 const query = `*[_type == "product"]{
 title, id, image, price}`

 const sanityData:Product[] = await client.fetch(query);

  return (

    <div className='container mx-auto max-w-[1440px]'>
        {/* landing title */}

           <LandingPage 
           title="About Us"  
           head="About"  
           image="/images/themebg.png"  
           link="/about" />

{/* search options */}

<div className='' >
<h1 className='text-2xl md:text-4xl -mt-16 md:mt-20 text-center text-green-800 ' id='myfont'>
  <i className='bx bx-store text-green-800 md:text-5xl text-2xl pl-2 pr-2 mt-2 '></i>Our Shop</h1>
</div>
   <div className='md:p-14 ml-4 md:ml-32'>
        <label>Sort By:</label>
    <select className='w-20 md:w-44 2xl:w-80 md:ml-2 md:p-2 border border-gray-400 shadow-sm text-gray-400'>
        <option selected>Newest </option>
        <option >Oldest</option>
    </select>

    <label className='md:ml-4 ml-2'>Show:</label>
    <select className='w-20 md:w-44 2xl:w-80 md:ml-2 md:p-2 border border-gray-400 shadow-sm text-gray-400'>
        <option selected>Default</option>
        <option >Oldest</option>
    </select>
    
    </div> 

{/* shop items  layout*/}

<div className='md:px-20 lg:ml-28 p-4 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-2'>  

    {/* grid 1 */}  
    <div className='col-span-2 md:col-span-3 lg:col-span-3 '>  
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>  
     {/* shop products  */}
       {sanityData.map((product) => (
          <div key={product.id} className=''>
         <Link href={`/shopdetails/${product.id}`}> 

          <Image src={urlFor(product.image).url()}  
           alt={product.title} width={500} height={500}/>
          <div className='flex hover:-mb-10 group'>
         <Twitter className='transparent group-hover:text-white p-2 group-hover:bg-green-600'/> 
         <Facebook className='transparent group-hover:text-white p-2 group-hover:bg-green-600'/>
         <Instagram className='transparent group-hover:text-white p-2 group-hover:bg-green-600'/>
          </div>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        

        </Link>
      </div>
      ))}

        </div> 
    </div>  

    {/* grid 2 */}  
    <div className='col-span-2 lg:col-span-1 md:col-span-2 border shadow-md p-1 md:p-3 2xl:mr-60'> 

     <h1 className='flex'><input type="text" placeholder='Search Product' 
              className='bg-green-200 w-24 md:w-40 lg:w-28 text-sm p-1'/>
      <i className='bx bx-search  bg-green-800 text-white p-2 md:p-3 '></i></h1> 


{/* category  */}
        <h1 className='font-bold mt-1 md:mt-2 text-sm md:text-lg'>Category</h1>

        <div className='text-sm md:text-lg'>
         <h1><input type="checkbox" className='mt-0 md:mt-2'/> Sandwiches</h1> 
         <h1><input type="checkbox" className='mt-0 md:mt-2'/> Burger</h1> 
         <h1><input type="checkbox" className='mt-0 md:mt-2'/> Chicken Chup</h1> 
         <h1><input type="checkbox" className='mt-0 md:mt-2'/> Drink</h1> 
         <h1><input type="checkbox" className='mt-0 md:mt-2'/> Pizza</h1> 
         <h1><input type="checkbox" className='mt-0 md:mt-2'/> Thi</h1> 
         <h1><input type="checkbox" className='mt-0 md:mt-2'/> Non Veg</h1> 
         <h1><input type="checkbox" className='mt-0 md:mt-2'/> Uncategorized</h1> 
  </div>
<Image src={banner} alt='' width={500} height={500} className='w-20 md:w-60 mt-2 md:mt-4 
 z-10 transition-opacity duration-300 hover:opacity-10'/>

{/* by Price  */}
        <h1 className='font-bold mt-1 md:mt-2 text-sm md:text-lg'> Filter By Price</h1>
         <hr className='md:w-40 w-20 h-1 border-green-800 mt-1 md:mt-2'/>
        <h2 className=' mt-1 md:mt-2 text-gray-400'> From $0 to $8000 <span className=''>Filter</span></h2>
        <h1 className='font-bold mt-1 md:mt-3 text-sm md:text-lg ' id='#New'>Latest Products</h1>
         
         <div className='grid grid-cols-2 gap-0 md:gap-2'>

<Image src={shopG2} alt='' width={500} height={500} className='w-14 md:w-20 mt-1 md:mt-2'/>

          <div className=' text-sm md:text-lg'>
            <p>Pizza</p>
            <i className='bx bxs-star text-green-800 '></i>
            <i className='bx bxs-star text-green-800 '></i>
            <i className='bx bxs-star text-gray-400 '></i>
            <i className='bx bxs-star text-gray-400 '></i>
             <p>$35.00</p>
            </div> 

            <Image src={shopG2} alt='' width={500} height={500} className='w-14 md:w-20 mt-1 md:mt-2'/>

          <div className=' text-sm md:text-lg'>
            <p>Pizza</p>
            <i className='bx bxs-star text-green-800 '></i>
            <i className='bx bxs-star text-green-800 '></i>
            <i className='bx bxs-star text-gray-400 '></i>
            <i className='bx bxs-star text-gray-400 '></i>
             <p>$35.00</p>
            </div>

            <Image src={shopG2} alt='' width={500} height={500} className='w-14 md:w-20 mt-1 md:mt-2'/>

          <div className=' text-sm md:text-lg'>
            <p>Pizza</p>
            <i className='bx bxs-star text-green-800 '></i>
            <i className='bx bxs-star text-green-800 '></i>
            <i className='bx bxs-star text-gray-400 '></i>
            <i className='bx bxs-star text-gray-400 '></i>
             <p>$35.00</p>
            </div>

            <Image src={shopG2} alt='' width={500} height={500} className='w-14 md:w-20 mt-1 md:mt-2'/>

          <div className=' text-sm md:text-lg'>
            <p>Pizza</p>
            <i className='bx bxs-star text-green-800 '></i>
            <i className='bx bxs-star text-green-800 '></i>
            <i className='bx bxs-star text-gray-400 '></i>
            <i className='bx bxs-star text-gray-400 '></i>
             <p>$35.00</p>
            </div>           

         </div>

     <h1 className='font-bold mt-1 md:mt-3 text-sm md:text-lg '>Product Tags</h1>
         
<div className='grid grid-cols-2 md:grid-cols-3 font-thin text-xs text-black hover:text-green-800 hover:underline'>
        
<p>Our Shop</p><p>Services</p>
<p>Menu</p>
<p>Cupcake</p>
<p>Burger</p>
<p> Cookies</p>
<p>Pizza</p>
<p>Tandoori</p>
<p>Chicken</p>
       </div>

    </div>  

</div>

    </div>
  )
}




