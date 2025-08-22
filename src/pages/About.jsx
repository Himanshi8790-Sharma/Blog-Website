import React from 'react'
import aboutImage from '../assets/about.png'

function About() {
  return (
    <div>
      <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About Us</h2>
      </div>
      
      {/* Main Content Section */}
      <div className='container mx-auto px-4 py-16'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Left Column - Company Photo */}
          <div className='w-full lg:w-1/2'>
            <img 
              src={aboutImage} 
              alt='Our Company' 
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>
          
          {/* Right Column - Company Description */}
          <div className='w-full lg:w-1/2'>
            <h3 className='text-3xl font-bold text-gray-800 mb-6'>Our Story</h3>
            <div className='text-gray-600 leading-relaxed space-y-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
