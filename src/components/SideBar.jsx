import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function SideBar() {
  const [popularBlogs, setpopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/blogsData.json")
      .then((res) => res.json())
      .then((data) => setpopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4 pb-4  ">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-gray-300 px-4">
              <h4 className="font-medium mb-4">{blog.title}</h4>
              <Link
                to="/"
                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2 " />
              </Link>
            </div>
          ))}
        </div>
      </div>
          {/* Popular Blog */}
      <div>
        <h2 className="text-2xl font-semibold px-4 pb-4 mt-20 ">Popular Blogs</h2>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-gray-300 px-4">
              <h4 className="font-medium mb-4">{blog.title}</h4>
              <Link
                to="/"
                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2 " />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
