import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-cream py-4 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-dark-gray">
          Webild
        </div>
        <button className="bg-yellow hover:bg-yellow-hover text-dark-gray font-medium px-6 py-2 rounded-full transition-colors duration-200">
          Start Now
        </button>
      </div>
    </header>
  )
}

export default Header