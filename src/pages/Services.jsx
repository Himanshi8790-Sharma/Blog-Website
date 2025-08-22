import React from 'react'

function Services() {
  const services = [
    {
      title: 'Content Writing',
      description: 'Professional blog posts, articles, and web content tailored to your audience and optimized for SEO.',
      icon: '📝',
      features: ['SEO Optimization', 'Engaging Content', 'Research-Based', 'Quick Turnaround']
    },
    {
      title: 'Web Development',
      description: 'Custom website development with modern technologies including React, Node.js, and responsive design.',
      icon: '💻',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'Cross-Browser Compatible']
    },
    {
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization to improve your website visibility and organic traffic.',
      icon: '🔍',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics Reporting']
    },
    {
      title: 'Social Media Management',
      description: 'Complete social media strategy and management across all major platforms to grow your audience.',
      icon: '📱',
      features: ['Content Strategy', 'Community Management', 'Analytics', 'Campaign Management']
    },
    {
      title: 'Graphic Design',
      description: 'Professional graphic design services including logos, banners, and marketing materials.',
      icon: '🎨',
      features: ['Brand Identity', 'Marketing Materials', 'Social Media Graphics', 'Print Design']
    },
    {
      title: 'Consulting',
      description: 'Expert consulting services to help you develop and implement your digital strategy.',
      icon: '👥',
      features: ['Strategy Development', 'Technical Advice', 'Market Analysis', 'Implementation Support']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Our Services</h2>
        <p className='text-xl text-gray-300'>Professional solutions to help your business grow</p>
      </div>

      {/* Services Grid Section */}
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h3 className='text-3xl font-bold text-gray-800 mb-4'>What We Offer</h3>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            We provide comprehensive digital services to help businesses establish their online presence, 
            engage with their audience, and achieve their growth objectives.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
              <div className='text-4xl mb-4'>{service.icon}</div>
              <h4 className='text-xl font-bold text-gray-800 mb-3'>{service.title}</h4>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              
              <div className='space-y-2'>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className='flex items-center text-sm text-gray-600'>
                    <svg className='w-4 h-4 text-green-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className='bg-gray-100 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h3 className='text-3xl font-bold text-gray-800 mb-4'>Ready to Get Started?</h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Contact us today to discuss how our services can help your business succeed in the digital world.
          </p>
          <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200'>
            Get in Touch
          </button>
        </div>
      </div>

      {/* Process Section */}
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h3 className='text-3xl font-bold text-gray-800 mb-4'>Our Process</h3>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            We follow a structured approach to ensure quality and timely delivery of our services.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl font-bold text-blue-600'>1</span>
            </div>
            <h4 className='font-semibold text-gray-800 mb-2'>Consultation</h4>
            <p className='text-gray-600 text-sm'>We discuss your needs and goals to understand your requirements.</p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl font-bold text-blue-600'>2</span>
            </div>
            <h4 className='font-semibold text-gray-800 mb-2'>Planning</h4>
            <p className='text-gray-600 text-sm'>We create a detailed plan and timeline for your project.</p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl font-bold text-blue-600'>3</span>
            </div>
            <h4 className='font-semibold text-gray-800 mb-2'>Execution</h4>
            <p className='text-gray-600 text-sm'>Our team works diligently to deliver high-quality results.</p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl font-bold text-blue-600'>4</span>
            </div>
            <h4 className='font-semibold text-gray-800 mb-2'>Delivery</h4>
            <p className='text-gray-600 text-sm'>We deliver the final product and provide ongoing support.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
