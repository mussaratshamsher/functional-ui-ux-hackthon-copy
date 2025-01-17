import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import themebg from '../../../public/images/themebg.png'


export default function page() {
  return (
    <div>

{/* landing page */}
<div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl z- md:ml-[500px]'>FAQ's</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../faq' className='text-white'> FAQ</Link></div>
</div>

<h1 className='text-center text-1xl text-bold md:text-4xl mt-5 md:mt-20 text-green-800 font-bold' id='myfont'>Questions Look Here</h1>
<p className='text-center md:mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

<div className='grid grid-cols-2 mt-3 md:mt-10 md:m-10 gap-2 md:gap-5'>
   
    {/* grid 1  */}
    <div className=' bg-green-200'>
        <h1 className='p-2'> <b>How we serve food? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>
      {/* grid 2  */}

      <div className=' bg-green-200'>
        <h1 className='p-2'> <b>How can get in touch with you? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>

{/* grid 3  */}
<div className=' bg-green-200'>
        <h1 className='p-2'> <b>How is our food quality? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>

{/* grid 4  */}
<div className='bg-green-200'>
        <h1 className='p-2'> <b>What will be delivered? And When? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>

    {/* grid 5  */}
<div className='bg-green-200'>
        <h1 className='p-2'> <b>How do we give home delivery? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>

    {/* grid 6 */}
<div className='bg-green-200'>
        <h1 className='p-2'> <b>Is this resturant 24 hours open? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>


</div>
    </div>
  )
}
