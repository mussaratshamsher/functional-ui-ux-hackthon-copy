
"use client"  
import React, { useState } from 'react'  
import { Button } from '../ui/button'  
import { ThumbsDown, ThumbsUp } from 'lucide-react'  

export default function LikeBlogs() {  
    const [count, setCount] = useState(0);  
  
    return (  
        <div className='flex flex-row gap-2 ml-2 items-center'> 

            <span>{count}</span>               
            <Button variant={'destructive'} onClick={() => setCount(count + 1)}>  
                <ThumbsUp /> </Button> 

         <Button variant={'destructive'} onClick={() => setCount(Math.max(count - 1, 0))}>  
                <ThumbsDown />  
            </Button>  
        </div>  
    )  
}



