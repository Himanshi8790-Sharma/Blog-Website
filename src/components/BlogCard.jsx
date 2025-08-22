import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";

function BlogCard({blog,currentPage,selectedCategory,pageSize}) {
    const filteredBlogs = blog.filter((blog)=> 
      
      !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage -1) * pageSize, currentPage * pageSize);
    ;
  
    console.log(filteredBlogs)
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-[150px]'>
      {
        filteredBlogs.map((blogs) =>{
          console.log(blogs.id);
          return(
            <Link key={blogs.id }   to={`/blogs/${blogs.id}`}   // 👈 navigate to SingleBlog
              className='p-5 shadow-lg rounded cursor-pointer '>
              
                <div>
                    <img src={blogs.image} alt="" className='w-full' />
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blogs.title}</h3>
                    <p className='mb-2  text-gray-700'> <FaUser className='inline-flex items-center mr-2'/>{blogs.author}</p>
                    <p className='text-sm text-gray-600 '>Published: {blogs.published_date}</p>
                </div>
            </Link>
          )
        }
            
        )
      }
    
    </div>
    
  )
}

export default BlogCard
