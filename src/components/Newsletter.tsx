import React from 'react'

const Newsletter: React.FC = () => {
  return (
    <section className="bg-cream py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray">
              Newsletter
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark-gray">
                Enter your email
              </h3>
              <p className="text-gray-text">
                By signing up for our newsletter, you'll get early access to news and special offers.
              </p>
              <button className="bg-yellow hover:bg-yellow-hover text-dark-gray font-medium px-8 py-3 rounded-full transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                alt="Professional workspace with laptop and design materials"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter