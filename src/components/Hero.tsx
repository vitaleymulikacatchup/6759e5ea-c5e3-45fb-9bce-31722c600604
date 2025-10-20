import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-cream py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-dark-gray leading-tight">
              Build Better Websites
            </h1>
            <p className="text-lg lg:text-xl text-gray-text leading-relaxed">
              Create stunning digital experiences with our technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow hover:bg-yellow-hover text-dark-gray font-medium px-8 py-3 rounded-full transition-colors duration-200">
                Learn More
              </button>
              <button className="text-dark-gray font-medium px-8 py-3 rounded-full border border-gray-300 hover:border-gray-400 transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Modern workspace with computer showing colorful design interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero