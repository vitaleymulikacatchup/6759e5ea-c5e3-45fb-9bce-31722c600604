import React from 'react'

const Features: React.FC = () => {
  return (
    <section className="bg-cream py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-yellow px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-dark-gray">Innovation</span>
              </div>
              <p className="text-gray-text">
                Pushing the boundaries of technology.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark-gray">Quality</h3>
              <p className="text-gray-text">
                Excellence in every detail.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                alt="Professional woman working on laptop in modern office"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features