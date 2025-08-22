import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

function BlogPage() {
    const [blog,setBlog] = useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const pageSize = 12 //Blog per page
    const [selectedCategory,setSelectedCategory]= useState(null);
    const [activeCategory,setactiveCategory]=useState(null);

    useEffect(()=>{
        async function fetchBlogs() {
            let url = `http://localhost:5173/blogsData.json?pages=${currentPage}&limit=${pageSize}`;

            // Filter By category
            if(selectedCategory){
                url+= `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlog(data);
        }
        fetchBlogs();
    },[currentPage,pageSize,selectedCategory])


    // Page Changer
    const handlePageChange =(pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    const handleCategory = (category)=>{
        setSelectedCategory(category)
        setCurrentPage(1);
        setactiveCategory(category)
    }

  return (
    <div>
      {/* Category Section */}
    <div>
    <CategorySelection onSelectCategory={handleCategory} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
    </div>


      {/* BlogCards Section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        
        {/* Blog cards components */}
        <BlogCard blog={blog} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
      {/* SideBar Components */}
    <div>
      <SideBar/>
    </div>
    </div>


      {/* Pagination */}
      <div>
      <Pagination 
      onPageChange={handlePageChange}
      currentPage={currentPage} blog={blog} pageSize={pageSize} />
      </div>
    </div>
  )
}

export default BlogPage
