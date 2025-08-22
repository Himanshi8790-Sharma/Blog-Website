import React from 'react'
import { Link } from 'react-router-dom'
import { FaDribbble, FaFacebook, FaTwitter,FaBars, FaXmark } from "react-icons/fa6";


function Footer() {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
      <div className='grid mb-8 lg:grid-cols-6'>
        <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
            {/* Category 1 */}
            <div>
                <p className='font-medium tracking-wide text-gray-300'>Category</p>
                <ul className='mt-2 space-y-2 '>
                   <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>News</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>World</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Games</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>References</Link>
                   </li>
                </ul>
            </div>
            {/* Category 2 */}
            <div>
                <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                <ul className='mt-2 space-y-2 '>
                   <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Web</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>ECommerce</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Business</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Entertainment</Link>
                   </li>
                   <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Portfolio     </Link>
                   </li>
                </ul>
            </div>
            {/* Category 3 */}
            <div>
                <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                <ul className='mt-2 space-y-2 '>
                   <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Media</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Brochure</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Non-Profit</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Education</Link>
                   </li>
                   <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Projects</Link>
                   </li>
                </ul>
            </div>
            {/* Category 4 */}
            <div>
                <p className='font-medium tracking-wide text-gray-300'>Business</p>
                <ul className='mt-2 space-y-2 '>
                   <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Infopreneur</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Personal</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Wiki</Link>
                   </li>
                    <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Forum</Link>
                   </li>
                   <li>
                     <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500 '>Project</Link>
                   </li>
                </ul>
            </div>
        </div>
         {/* Subscription */}
            <div className='md:mx-w-md lg:col-span-2 lg:mt-0 mt-5'>
                <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
                <form className='mt-4 flex flex-col md:flex-row '>
                  <input type="email"  name='email' className='flex-grow w-full h-12 px-4 m-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none  ' />
                  <button type='submit' className='inline-flex items-center justify-center  h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:-outline-none border mt-3'>Subscribe</button>
                </form>
                <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid id sit amet optio consequatur beatae numquam, magni accusantium dolore, eveniet vitae nulla dolorem, tenetur dolorum nemo neque hic ipsa facere!</p>
            </div>


      </div>
       </div>

       <div  className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
        <p className='text-sm text-gray-500 ml-[220px]'> © Copyright 2023 | All right reserved </p>
        <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
          <Link to="" className='text-gray-500 transition-all duration-300 hover:text-teal-400'><FaTwitter className='h-6 w-6'/></Link>
          <Link to="" className='text-gray-500 transition-all duration-300 hover:text-teal-400'><FaFacebook className='h-6 w-6'/></Link>
          <Link to="" className='text-gray-500 transition-all duration-300 hover:text-teal-400'><FaDribbble className='h-6 w-6'/></Link>
        </div>
       </div>
    </div>
  )
}

export default Footer
