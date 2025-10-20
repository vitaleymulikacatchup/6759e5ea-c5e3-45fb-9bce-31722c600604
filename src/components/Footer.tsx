import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-dark-gray">Webild</h3>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-dark-gray">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark-gray hover:text-gray-600 transition-colors">About</a></li>
              <li><a href="#" className="text-dark-gray hover:text-gray-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-dark-gray">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark-gray hover:text-gray-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-dark-gray hover:text-gray-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer