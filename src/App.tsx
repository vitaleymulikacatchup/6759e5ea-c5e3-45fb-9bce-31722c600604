import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App