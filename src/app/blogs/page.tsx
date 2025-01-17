
import Image from 'next/image'
import React from 'react'

import blog1 from '../../../public/images/blog1.jpg'
import blog2 from '../../../public/images/blog2.jpg'
import blog3 from '../../../public/images/blog3.jpg'
import blog4 from '../../../public/images/blog4.jpg'
import img from '../../../public/images/img.png'
import blogf1 from '../../../public/images/blogf1.png'
import blogf2 from '../../../public/images/blogf2.png'
import blogf3 from '../../../public/images/blogf3.png'
import blogf4 from '../../../public/images/blogf4.png'
import blogm1 from '../../../public/images/blogm1.png'
import blogm2 from '../../../public/images/blogm2.png'
import f1 from '../../../public/images/f1.png'
import f2 from '../../../public/images/f2.png'
import f3 from '../../../public/images/f3.png'
import f4 from '../../../public/images/f4.png'
import f5 from '../../../public/images/f5.png'
import f6 from '../../../public/images/f6.png'

import { Button } from '@/components/ui/button'
import CommentSection from '@/components/theme/CommentSection'
import LandingPage from '@/components/layout/LandingPage'
import Link from 'next/link'


const blogs = [
  { id:1, title: 'Chocolate Truffle Cake With Honey Flavour', image: '/images/blog1.jpg', 
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: 'Jan 14, 2022 '  , post: 'Admin '  
   },
   { id:2, title: 'Chocolate Truffle Cake With Honey Flavour', image: '/images/blog2.jpg', 
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: 'Jan 14, 2022 '  , post: 'Admin '  
   },
   { id:3, title: 'Chocolate Truffle Cake With Honey Flavour', image: '/images/blog3.jpg', 
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: 'Jan 14, 2022 '  , post: 'Admin '  
   },
   { id:4, title: 'Chocolate Truffle Cake With Honey Flavour', image: '/images/blog4.jpg', 
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: 'Jan 14, 2022 '  , post: 'Admin '  
   },
   { id:5, title: 'Chocolate Truffle Cake With Honey Flavour', image: '/images/blog5.jpg', 
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: 'Jan 14, 2022 '  , post: 'Admin '  
   },
]

export default function Blogs() {
  return (
    <div>
{/* landing page */}

    <LandingPage  
     title="Our Blogs"  
     head="Blogs"  
     image="/images/themebg.png"  
     link="/blogs" />

<h1 className='text-center text-1xl text-bold md:text-5xl -mt-24 md:mt-24 text-green-800 font-bold' id='myfont'>Read Blogs</h1>

{/* blog layout  */}

<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-5 2xl:ml-40 2xl:mr-60
 lg:ml-20 lg:mr-20 xl:ml-40 xl:mr-40 px-2 md:gap-3 lg:gap-5 md:px-5 lg:py-10 '>  
  {/* grid 1 */}  
  
  <div className='col-span-1 md:col-span-2 lg:col-span-2 2xl:col-span-3 md:gap-5 gap-1 '>  
    {/* Blog 1 */}
    {blogs.map((blg) =>
    <div key={blg.id}>
      <Link href={`/blogsdetail/${blg.id}`} className='mb-2'>
      
      <Image src={blg.image} alt="Chocolate Truffle Cake" width={500} height={500} 
      className='w-36 h-20 md:w-[500px] md:h-[300px] 2xl:w-[1200px] 2xl:h-[500px] scale-100 transition-all duration-300 hover:scale-90'/>  
      <div className='mt-2 text-xs'>  
        <i className='bx bx-box text-green-700'></i>{blg.date}/   
        <i className='bx bx-chat text-green-700'></i> 3 /   
        <i className='bx bx-user-plus text-green-700'></i>{blg.post}  </div>  
      <h1 className='font-bold text-sm  md:text-lg mt-2'> {blg.title}</h1>  
      <p className='mt-2 text-xs md:text-sm'> {blg.para}</p>  
     
      </Link>
      <div className='flex flex-col md:flex-row md:gap-5 md:p-2 '>
      <Button variant='ghost' className='text-green-700 md:w-40 md:h-10 w-24 h-6  '>  
        Read More <i className='bx bx-right-top-arrow-circle'></i>  
      </Button>  <CommentSection /> 
      </div>
    </div>
    )}     
</div>

  {/* grid 2 */}  
  <div className=' h-fit col-span-1 md:col-span-2 lg:col-span-1 2xl:col-span-2 border shadow-md md:p-2 lg:p-5 p-1'>  
{/* search bar  */}
    <h1 className='flex'><input type="text" placeholder='Search Product' className='bg-green-200 w-24 md:w-60 2xl:w-[600px] text-xs md:text-sm md:p-3 p-1'/>
      <i className='bx bx-search  bg-green-800 text-white p-2 md:p-4 '></i></h1> 
{/* User bloger  */}
      <div className='flex flex-col justify-center items-center border shadow-sm p-2 mt-2 md:mt-10 2xl:mt-20 2xl:text-xl text-xs md:text-sm text-gray-500'>
        <Image src={img} alt='' width={500} height={500} className='w-8 h-8 md:w-10 md:h-10 2xl:w-20 2xl:h-20'/>
        <h1 className='text-black '><b>Prince Miyako</b></h1>
        <p >Blogger</p>
        <div className='text-green-800'>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>(1k Review) </div>
        <p className='md:indent-5'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en 
          page avant impression. </p>
          <p className='text-black md:mt-5 mt-2'><i className='bx bxl-facebook hover:text-green-700'></i><i className='bx bxl-twitter hover:text-green-700'></i>
          <i className='bx bxl-instagram hover:text-green-700'></i><i className='bx bxl-pinterest hover:text-green-700'></i></p>
      </div> 
 {/* Recent post  */}
    <div className='flex flex-col justify-center items-center border shadow-sm p-1 md:p-2 mt-2 md:mt-7 text-sm text-gray-500 2xl:mt-20 2xl:text-xl'>
    <h1 className='font-bold mt-1 md:mt-2 mb-2 md:mb-3'>Recent Post</h1>
    {/* product 1  */}
    <div className='flex flex-row gap-1 md:gap-3'>
        <Image src={blogf1} alt='' width={500} height={500} 
        className='w-7 h-7 md:w-20 md:h-16 2xl:w-40 2xl:h-24' id='blog'/>
          <div className=' '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
           </div> 
          </div>
{/* product  2 */}
<div className='flex flex-row gap-1 md:gap-3 mt-2'>
<Image src={blogf2} alt='' width={500} height={500} className='w-7 h-7 md:w-20 md:h-16 2xl:w-40 2xl:h-24' id='blog'/>
          <div className=' '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
            </div> 
           </div>
{/* product  3 */}
<div className='flex flex-row gap-1 md:gap-3 mt-2'>
<Image src={blogf3} alt='' width={500} height={500} className='w-7 h-7 md:w-20 md:h-16 2xl:w-40 2xl:h-24' id='blog'/>
          <div className=' '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
            </div> 
           </div>
{/* product  4 */}
<div className='flex flex-row gap-1 md:gap-3 mt-2'>
<Image src={blogf4} alt='' width={500} height={500} className='w-7 h-7 md:w-20 md:h-16 2xl:w-40 2xl:h-24' id='blog'/>
          <div className=' '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
            </div> 
           </div>

 </div>

{/* Filter By Menu  */}
<div className='border shadow-sm p-2 mt-2 md:mt-7 text-xs md:text-sm font-bold 2xl:mt-20 2xl:text-xl'>
<h1 className='mm:mt-2 md:mb-5 mb-1'>Filter By Menu</h1>
{/* menu 1  */}
<div className='grid grid-cols-4 mt-1'>
  <Image src={blogm1} alt='' width={500} height={500} className='w-10 h-10'/>
  <h1 className='col-span-2 '> Chicken Fry</h1>
  <h2 className='font-thin '>26</h2>
</div>
{/* menu 2  */}
<div className='grid grid-cols-4 mt-1'>
  <Image src={blogm2} alt='' width={500} height={500} className='w-10 h-10'/>
  <h1 className='col-span-2'> Pizza</h1>
  <h2 className='font-thin'>26</h2>
</div>
{/* menu 3  */}
<div className='grid grid-cols-4 mt-1'>
  <Image src={blogm1} alt='' width={500} height={500} className='w-10 h-10'/>
  <h1 className='col-span-2'> Chicken Fry</h1>
  <h2 className='font-thin'>26</h2>
</div>
{/* menu 4  */}
<div className='grid grid-cols-4 mt-1'>
  <Image src={blogm2} alt='' width={500} height={500} className='w-10 h-10'/>
  <h1 className='col-span-2'> Pizza</h1>
  <h2 className='font-thin'>26</h2>
</div>

</div>

{/* popular tags  */}
<div className='border shadow-sm p-2 mt-2 md:mt-7 text-xs md:text-sm 2xl:mt-20 2xl:text-xl'>

<h1 className='font-bold md:mt-2 md:mb-3 mb-2'> Popular Tags</h1>

<div className='grid grid-cols-2 md:grid-cols-3 lg:gap-2 gap-1 2xl:gap-5'>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'>Sandwich </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'>Tikka </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Bbq</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'>Reaturant </p>
<p className='col-span-2 border shadow-sm p-1 md:p-2 hover:bg-green-200'> Chicken Shaurma</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'>Health </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Fastfood</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Food</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Pizza</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Chicken</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Burger</p>

 </div>

</div>

{/* Photo Gallery  */}
<div className='border shadow-sm p-2 mt-2 md:mt-7 text-xs md:text-sm 2xl:mt-20 2xl:text-xl'>

  <h1 className='font-bold mt-1 md:mt-2 mb-2 md:mb-5'>Photo Gallery</h1>
  <div className='grid grid-cols-3 grid-rows-2 gap-1'>

<Image src={f1} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={f3} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={f2} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={f4} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={f5} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={f6} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>

</div>
</div>

{/* Links  */}
<div className='border shadow-sm p-2 mt-2 md:mt-7 text-sm '>
<h1 className='font-bold mt-2'>Follow Us</h1>
<div className='flex gap-2 lg:gap-5 2xl:gap-10 text-black mt-2 md:p-3 p-2'>
  <i className='bx bxl-twitter p-1 md:p-3 2xl:p-7 bg-green-200 hover:bg-green-800 hover:text-white'></i>
<i className='bx bxl-pinterest p-1 md:p-3 2xl:p-7 bg-green-200 hover:bg-green-800 hover:text-white'></i>
 <i className='bx bxl-instagram p-1 md:p-3 2xl:p-7 bg-green-200 hover:bg-green-800 hover:text-white'></i>
 <i className='bx bxl-facebook p-1 md:p-3 2xl:p-7 bg-green-200 hover:bg-green-800 hover:text-white'></i>
 </div>
</div>

</div>  

    </div>


    </div>
  )
}
