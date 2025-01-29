"use client"  

import {  
    Sheet,  
    SheetContent,  
    SheetTrigger,  
} from "@/components/ui/sheet";  
import { Search, ShoppingBag, User } from 'lucide-react';  
import Link from 'next/link';  
import { useState } from 'react';  
import ModeToggle from "../theme/ModeToggle";
 

export default function Header() {  
    const [isOpen, setIsOpen] = useState(false); 

    const toggleDropdown = () => {  
        setIsOpen(prev => !prev); 
    };  

    return ( 
        <div className="container max-w-[1440px] mx-auto"> 
        <div className="w-full"> 
         {/* banner  */}
            <div id='banner'>  
                <h1 className='h-10 sm:text-lg md:text-1xl mt-2 p-2 text-xs' id='scrolling-text'>  
                    <b className="text-2xl">F<span id='clr'>oo</span>dtuck <i className='bx bx-bowl-hot text-green-600 text-2xl'></i></b>  
                </h1>  
            </div>  

            <div className=" sm:h-14 md:h-20 h-10 flex flex-row backdrop-blur-sm md:justify-between justify-evenly gap-2 md:mt-5 mt-3 md:p-5 p-2">  
                <h1 className='font-bold md:text-2xl lg:text-4xl text-1xl md:ml-7 lg:ml-32'>F<span id='clr'>oo</span>dtuck</h1>  

                <ul className="md:flex md:flex-row md:gap-4 lg:gap-8 hidden ">  
                    <li className='hover:underline  hover:decoration-green-700'><Link href="/">Home</Link></li>  

                    
                    <li className='hover:underline  hover:decoration-green-700'><Link href="./../menu">Menu</Link></li>  
                    <li className='hover:underline  hover:decoration-green-700'><Link href="./../blogs">Blog</Link></li>

                    <li className='relative' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>  
                        <span className='cursor-pointer hover:underline hover:decoration-green-700'>Pages<i className='bx bx-chevron-down'></i></span>  
                        {isOpen && (   
                            <ul className="absolute bg-white w-28 shadow-md mt-1 rounded-lg p-2 z-10 text-xs">  
                         <li className='hover:underline hover:decoration-green-700'><Link href="/chefs">Our chef</Link></li>  
                         <li className='hover:underline hover:decoration-green-700'><Link href="/shop">Shop details</Link></li>  
                        <li className='hover:underline hover:decoration-green-700'><Link href="/faq">FAQ</Link></li>  
                            </ul>  
                        )}  </li>  
                    <li className='hover:underline  hover:decoration-green-700'><Link href="/shop">Shop</Link></li>  
                    <li className='hover:underline hover:decoration-green-700'><Link href="/about">About</Link></li>  
                    <li className='hover:underline  hover:decoration-green-700'><Link href="/contact">Contact</Link></li>  
                </ul>  

                <div className="flex flex-row md:gap-3 md:mr-20">  
                    <Link href='/search'><Search /></Link> 
                    <Link href="/auth"><User /></Link> 
                    <Link href="/cart"> <ShoppingBag /></Link> 
                       <ModeToggle/>
                    
                </div>  

                <Sheet>  
                    <SheetTrigger className="md:hidden">  
                        <i className='bx bx-menu-alt-right text-green-800' id="back"></i>  
                    </SheetTrigger>  
                    <SheetContent className="absolute left-0">  
                        <ul className="flex flex-col gap-4">  
                            <li className='hover:underline hover:decoration-green-700'><Link href="/">Home</Link></li>  
                            <li className='hover:underline hover:decoration-green-700'><Link href="/menu">Menu</Link></li>  
                            <li className='hover:underline hover:decoration-green-700'><Link href="/blogs">Blog</Link></li>  
                            <li className='hover:underline hover:decoration-green-700'><Link href="/shop">Shop</Link></li>  
                            <li className='hover:underline hover:decoration-green-700'><Link href="/about">About</Link></li>  
                            <li className='hover:underline hover:decoration-green-700'><Link href="/contact">Contact</Link></li> 

                            <li className='relative' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>  
                        <span className='cursor-pointer hover:underline hover:decoration-green-700'>Pages<i className='bx bx-chevron-down'></i></span>  
                        {isOpen && (   
                            <ul className="absolute bg-white w-28 shadow-md mt-1 rounded-lg p-2 z-10 text-xs">  
                                <li className='hover:underline hover:decoration-green-700'><Link href="./../chefs">Our chef</Link></li>  
                                <li className='hover:underline hover:decoration-green-700'><Link href="./../shop">Shop</Link></li>  
                                <li className='hover:underline hover:decoration-green-700'><Link href="./../faq">FAQ</Link></li>  
                            </ul>  
                        )}  </li>   
                        </ul>  
                    </SheetContent>  
                </Sheet>  
            </div>  
        </div>  
        </div>
    );  
}