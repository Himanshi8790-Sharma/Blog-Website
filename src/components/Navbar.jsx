import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { FaDribbble, FaFacebook, FaTwitter,FaBars, FaXmark } from "react-icons/fa6";
import { useState } from 'react';
import Model from './Model';

function Navbar() {
    // Function for Mobile Menu
    const [isMenu,setIsMenu]= useState(false);
    const [isModelOpen, setisModelOpen] = useState(false)

    const toggleMenu =()=>{
      setIsMenu(!isMenu);
    }

    // Model Detail

    const openModel = ()=>{
      setisModelOpen(true)
    }
    const closeModel = ()=>{
      setisModelOpen(false);
    }

  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0 '>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <Link to="/" className='text-xl font-bold text-white'>Design <span className='text-orange-500'>HS</span></Link>

         {/* NavLinks */}
         <ul className='text-white md:flex gap-12 text-lg hidden ' >
        <li>
          <NavLink
          to="/"
          className={({isActive})=>
            isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          } >Home
          </NavLink>
          </li>
          <li>
          <NavLink to="/about"
          className={({isActive})=>
          isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          }
          >
            About
          </NavLink>
          </li>
          <li>
           <NavLink to="/blog"
          className={({isActive})=>
          isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          }
          >
            Blog
          </NavLink>
          </li>
          <li>
          <NavLink to="/services"
          className={({isActive})=>
          isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          }
          >
            Services
          </NavLink>
          </li>
          
         <li>
           <NavLink to="/contact"
          className={({isActive})=>
          isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          }
          >
            Contact
          </NavLink>
         </li>
          
         </ul>

    {/* Menu Icons */}
    <div className='text-white lg:flex gap-4 items-center hidden'> 
        <Link to="/" className='hover:text-orange-500'><FaFacebook /></Link>
        <Link to="/" className='hover:text-orange-500'><FaDribbble /></Link>
        <Link to="/" className='hover:text-orange-500'><FaTwitter /></Link>
        <button onClick={openModel} className='bg-orange-500 px-6 py-2 font-medium rounded  hover:text-orange-500 hover:bg-white transition-all duration-200 ease-in'>Log In</button>
    </div>
    {/*  Model Component */}
    <Model isOpen ={isModelOpen} onclose={closeModel}/>

    {/* Mobile Menu Icon */}
    <div className='md:hidden'>
      <button onClick={toggleMenu} className='cursor-pointer'>
    {
      isMenu ? <FaXmark  className="w-5 h-5 "/> : <FaBars className="w-5 h-5 "/>
    }
      </button>
    </div>
    </nav>

    {/* Menu items only for mobiles */}

    <div>
      <ul className={ ` md:hidden text-black bg-white  gap-12 text-lg block space-y-4 px-4 py-6 mt-14   ${isMenu ? "fixed top-0 left-0 w-full transition-all ease-out duration-200":"hidden"}`}>
        
        <li>
          <NavLink
          onClick={toggleMenu}
          to="/"
          className={({isActive})=>
            isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          } >Home
          </NavLink>
          </li>
        <li>
          <NavLink to="/about"
          onClick={toggleMenu}
          className={({isActive})=>
          isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog"
          onClick={toggleMenu}
          className={({isActive})=>
          isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/services"
          onClick={toggleMenu}
          className={({isActive})=>
          isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact"
          onClick={toggleMenu}
          className={({isActive})=>
          isActive ? "text-orange-500 font-semibold underline" : "hover:text-gray-300"
          }
          >
            Contact
          </NavLink>
        </li>
         </ul>
    </div>

    </header>
  )
}

export default Navbar
