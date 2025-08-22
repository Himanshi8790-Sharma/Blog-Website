import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {FaUser,FaClock} from "react-icons/fa6"
import SideBar from "../components/SideBar";

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blogsData.json") // 👈 relative path, since Vite serves from /public
      .then((res) => res.json())
      .then((data) => {
        const single = data.find((item) => item.id === parseInt(id));
        setBlog(single);
      });
  }, [id]);

  if (!blog) {
    return <h2>Blog not found</h2>;
  }
  const {title,image,category, author,published_date,reading_time, content}=blog;

  return (
    <div>
      <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '> Single Blog Page </h2>
      </div>
      {/* Blog Details */}
    <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 ">
        <div className="lg_w-3/4 mx-auto">
        <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
        </div>
        <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">{title}</h2>
        <p className="mb-3 text-gray-600"><FaUser className="inline-flex items-center mr-2"/>{author} |{published_date}</p>
        <p className="mb-3 text-gray-600"><FaClock className="inline-flex items-center mr-2"/>{reading_time}</p>
        <p className=" text-base text-gray-500 mb-6">{content}</p>
        <div className=" text-base text-gray-500 ">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ea cum corporis hic numquam ratione, quaerat unde maiores voluptas labore reprehenderit itaque laboriosam quas at ad. Ratione odit, commodi ullam, ea quasi tenetur excepturi quo corrupti vero beatae eveniet? Fuga perferendis earum unde quisqua.</p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, recusandae atque. Culpa quo a minus! Neque repellat distinctio, asperiores voluptas hic at provident minima tempora consectetur! Numquam quos excepturi praesentium molestiae? Illo est quisquam eius iure aliquam vitae doloribus labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliq!Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliquid dolore!</p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, recusandae atque. Culpa quo a minus! Neque repellat distinctio, asperiores voluptas hic at provident minima tempora consectetur! Numquam quos excepturi praesentium molestiae? Illo est quisquam eius iure aliquam vitae doloribus labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliq!Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliquid dolore!</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, recusandae atque. Culpa quo a minus! Neque repellat distinctio, asperiores voluptas hic at provident minima tempora consectetur! Numquam quos excepturi praesentium molestiae? Illo est quisquam eius iure aliquam vitae doloribus labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliq!Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliquid dolore!</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, recusandae atque. Culpa quo a minus! Neque repellat distinctio, asperiores voluptas hic at provident minima tempora consectetur! Numquam quos excepturi praesentium molestiae? Illo est quisquam eius iure aliquam vitae doloribus labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliq!Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliquid dolore!</p><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, recusandae atque. Culpa quo a minus! Neque repellat distinctio, asperiores voluptas hic at provident minima tempora consectetur! Numquam quos excepturi praesentium molestiae? Illo est quisquam eius iure aliquam vitae doloribus labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliq!Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliquid dolore!</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, recusandae atque. Culpa quo a minus! Neque repellat distinctio, asperiores voluptas hic at provident minima tempora consectetur! Numquam quos excepturi praesentium molestiae? Illo est quisquam eius iure aliquam vitae doloribus labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliq!Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam odio in, voluptate est iusto atque, deleniti similique, blanditiis id repudiandae quisquam laboriosam quam cupiditate suscipit consequuntur maiores aliquid dolore!</p>
            
        </div>
        </div>
        <div >
            <SideBar/>
        </div>
    </div>
    </div>
  );
}

export default SingleBlog;

