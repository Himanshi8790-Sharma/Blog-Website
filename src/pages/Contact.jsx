import React, { useState } from 'react'
import contactImage from '../assets/contact.png'
import { FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


import { Link } from 'react-router-dom';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Hero Section */}
      <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us</h2>
        <p className='text-xl text-gray-300'>Get in touch with us for any questions or inquiries</p>
      </div>

      {/* Main Content Section */}
      <div className='container mx-auto px-4 py-16'>
        <div className='flex flex-col lg:flex-row gap-12'>
          
          {/* Left Column - Contact Information */}
          <div className='w-full lg:w-1/2'>
            <div className='mb-12'>
              <img 
                src={contactImage} 
                alt='Contact Us' 
                className='w-full h-auto rounded-lg shadow-lg mb-8'
              />
              
              <h3 className='text-3xl font-bold text-gray-800 mb-6'>Get In Touch</h3>
              
              <div className='space-y-6 text-gray-600'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0'>
                     <CiLocationOn  className='w-6 h-6 text-blue-600'/>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Address</h4>
                    <p>123 Blog Street, City Center<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0'>
                     <FaPhoneAlt  className='w-6 h-6 text-blue-600'/>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0'>
                   <MdOutlineEmail  className='w-6 h-6 text-blue-600'/>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Email</h4>
                    <p>info@blogwebsite.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className='text-xl font-semibold text-gray-800 mb-4'>Follow Us</h4>
              <div className='flex gap-4'>
                <Link to="#"  className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors'><FaFacebook /></Link>
                <Link to="#"  className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors'><FaDribbble /></Link>
                <Link to="#"  className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors'><FaTwitter /></Link>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className='w-full lg:w-1/2'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                      placeholder='Your full name'
                    />
                  </div>
                  
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                      placeholder='your.email@example.com'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                    Subject *
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    placeholder='What is this regarding?'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none'
                    placeholder='Tell us how we can help you...'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200'
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className='mt-8 bg-gray-100 rounded-lg p-6 text-center'>
              <h4 className='text-lg font-semibold text-gray-800 mb-4'>Our Location</h4>
              <div className='bg-gray-200 rounded-lg h-48 flex items-center justify-center'>
                <p className='text-gray-500'>Map integration would go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
