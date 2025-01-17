"use client"
import React from 'react'
import clientest from '../../../public/images/clientest.png'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testmonial() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,    
  };
  return (
    <div>
<div className="slider-container">
      <Slider {...settings}>
        
        <div className='slide1'>
        <div className='h-auto mb-10 max-w-screen-sm ml-5 sm:ml-14 md:ml-28 lg:ml-48 xl:ml-96' >

<h2 id='myfont' className='text-green-800 mt-4 md:mt-5 mb-10 text-center'> Testimonials </h2>
<h1 className='text-center md:text-2xl text-1xl font-semibold'> What our Clients are saying </h1>
<div className='md:w-[600px] md:h-[400px] w-[270px] h-auto mt-20 mb-10' 
id='border'>
<Image src={clientest} alt='' width={500} height={500} className='absolute w-20 h-20 md:ml-[270px] ml-20 -mt-10'/>
<br />
<h2 className='font-mono text-center text-3xl mt-10' id='clr'>99</h2>

<p className='p-7 pt-0 pb-4'>It is a long established fact that a reader will be distracted by the readable content
   of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
distribution of  letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

<h1 id='clr' className='text-center'>
<i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i>
  <i className='bx bxs-star'></i><i className='bx bxs-star text-gray-400'></i>
</h1>
<h1 className='text-center text-2xl font-bold mt-5 mb-5'> Ali Hassan</h1>
<p className='text-center mt-5 mb-5'> Food Specialist</p>

</div>
      </div>
        </div>
        <div className='slide2'>
        <div className='h-auto mb-10 max-w-screen-sm ml-5 sm:ml-14 md:ml-28 lg:ml-48 xl:ml-96' >

<h2 id='myfont' className='text-green-800 mt-4 md:mt-5 mb-10 text-center'> Testimonials </h2>
<h1 className='text-center md:text-2xl text-1xl font-semibold'> What our Clients are saying </h1>
<div className='md:w-[600px] md:h-[400px] w-[270px] h-auto mt-20 mb-10' 
id='border'>
<Image src={clientest} alt='' width={500} height={500} className='absolute w-20 h-20 md:ml-[270px] ml-20 -mt-10'/>
<br />
<h2 className='font-mono text-center text-3xl mt-10' id='clr'>99</h2>

<p className='p-7 pt-0 pb-4'>It is a long established fact that a reader will be distracted by the readable content
   of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
distribution of  letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

<h1 id='clr' className='text-center'>
<i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i>
  <i className='bx bxs-star'></i><i className='bx bxs-star text-gray-400'></i>
</h1>
<h1 className='text-center text-2xl font-bold mt-5 mb-5'> Ali Hassan</h1>
<p className='text-center mt-5 mb-5'> Food Specialist</p>

</div>
      </div>
        </div>
        
        <div className='slide3'>
        <div className='h-auto mb-10 max-w-screen-sm ml-5 sm:ml-14 md:ml-28 lg:ml-48 xl:ml-96' >

<h2 id='myfont' className='text-green-800 mt-4 md:mt-5 mb-10 text-center'> Testimonials </h2>
<h1 className='text-center md:text-2xl text-1xl font-semibold'> What our Clients are saying </h1>
<div className='md:w-[600px] md:h-[400px] w-[270px] h-auto mt-20 mb-10' 
id='border'>
<Image src={clientest} alt='' width={500} height={500} className='absolute w-20 h-20 md:ml-[270px] ml-20 -mt-10'/>
<br />
<h2 className='font-mono text-center text-3xl mt-10' id='clr'>99</h2>

<p className='p-7 pt-0 pb-4'>It is a long established fact that a reader will be distracted by the readable content
   of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
distribution of  letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

<h1 id='clr' className='text-center'>
<i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i>
  <i className='bx bxs-star'></i><i className='bx bxs-star text-gray-400'></i>
</h1>
<h1 className='text-center text-2xl font-bold mt-5 mb-5'> Ali Hassan</h1>
<p className='text-center mt-5 mb-5'> Food Specialist</p>

</div>
      </div>
        </div>

      </Slider>
    </div>



    </div>
  )
}
