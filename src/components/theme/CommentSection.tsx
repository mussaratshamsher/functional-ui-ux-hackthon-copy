"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';  
import { Button } from '../ui/button';  

const CommentSection: React.FC = () => {  
  const [comments, setComments] = useState<string[]>([]);  
  const [commentText, setCommentText] = useState<string>('');  
  const [isEditing, setIsEditing] = useState<boolean>(false);  
  const [editIndex, setEditIndex] = useState<number | null>(null);  
  const [isVisible, setIsVisible] = useState<boolean>(false);  

  useEffect(() => {  
    // Effect can be used for initial toggle, for example, checking local storage  
  }, []);  

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {  
    e.preventDefault();  
    if (commentText.trim() !== '') {  
      if (isEditing && editIndex !== null) {  
        const updatedComments = comments.map((comment, index) =>  
          index === editIndex ? commentText : comment  
        );  
        setComments(updatedComments);  
        setIsEditing(false);  
        setEditIndex(null);  
      } else {  
        setComments(prev => [...prev, commentText]);  
      }  
      setCommentText('');  
    }  
  };  

  const handleEdit = (index: number) => {  
    setCommentText(comments[index]);  
    setIsEditing(true);  
    setEditIndex(index);   
  };  

  const handleDelete = (index: number) => {  
    const updatedComments = comments.filter((_, i) => i !== index);  
    setComments(updatedComments);  
  };  

  const toggleVisibility = () => {  
    setIsVisible(prev => !prev);  
  };  

  return (  
    <div className="comment-section md:mt-7 mt-2">  
      <Button className='md:w-40 md:h-10 w-24 h-6 -mt-20 ' variant={'ghost'} onClick={toggleVisibility}>  
        {isVisible ? 'Hide ' : 'Comments'}  
      </Button>  
      {isVisible && (  
        <div className='md:-ml-44'>  
          <h2 className="font-bold md:ml-5">Comments</h2>  
          <div className="comments-list">  
            {comments.length === 0 ? (  
              <p className='text-sm'>No comments yet. Be the first to comment!</p>  
            ) : (  
              comments.map((comment, index) => (  
                <div key={index} className="comment flex flex-col justify-between items-center">   
                  <p className='w-36 md:w-[300px] md:-ml-16 lg:w-[400px] h-auto p-2 border rounded-sm shadow-sm bg-green-200 text-sm'>  
                    {comment}  
                  </p>  
                  <div className='flex flex-row gap-2 md:gap-5'>  
                    <Button variant='ghost' className='text-green-800 w-12 md:w-20 h-5' onClick={() => handleEdit(index)}>Edit</Button>  
                    <Button variant='ghost' className='text-red-500 w-12 md:w-20 h-5 hover:text-red-400' onClick={() => handleDelete(index)}>Delete</Button>  
                  </div>  
                </div>  
              ))  
            )}  
          </div>  
          <form onSubmit={handleCommentSubmit} className="flex flex-col mt-2">  
            <textarea  
              className="border p-2 w-36 md:w-[300px] lg:w-[500px]"  
              value={commentText}  
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCommentText(e.target.value)}  
              placeholder="Add a comment..."   
            />  
            <Button className='w-20 h-8 md:w-40 md:h-10'>  
              {isEditing ? 'Update Comment' : 'Submit'}  
            </Button>   
          </form>  
        </div>  
      )}  
    </div>  
  );  
}  

export default CommentSection;