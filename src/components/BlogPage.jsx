import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';


function BlogPage() {
    const [allBlogs, setAllBlogs] = useState([]);
    const [blog,setBlog] = useState([]);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [currentPage, setCurrentPage]= useState(1);
    const pageSize = 12 //Blog per page
    const [selectedCategory,setSelectedCategory]= useState(null);
    const [activeCategory,setactiveCategory]=useState(null);

  
  // Fetch once when page loads
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('/blogsData.json');
        if (!response.ok) throw new Error('File not found');
        const data = await response.json();
        setAllBlogs(data); // store original blogs for filtering & pagination
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }
    fetchBlogs();
  }, []);

    // Handle filtering + pagination dynamically
  useEffect(() => {
    let filtered = selectedCategory
      ? allBlogs.filter(blog => blog.category === selectedCategory)
      : allBlogs;

    setTotalBlogs(filtered.length);

    const startIndex = (currentPage - 1) * pageSize;
    const paginated = filtered.slice(startIndex, startIndex + pageSize);
    setBlog(paginated);
  }, [allBlogs, currentPage, pageSize, selectedCategory]);

  // Page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
      currentPage={currentPage}  totalBlogs={totalBlogs}  pageSize={pageSize} />
      </div>
    </div>
  )
}

export default BlogPage
