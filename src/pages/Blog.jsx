import React from 'react'
import BlogPage from '../components/BlogPage'


function Blog() {
  return (
    <div>
      <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '> Welcome to Our Blog </h2>
      </div>
       {/* All Blogs Container */}

      <div className='mx-w-7xl mx-auto'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Blog
