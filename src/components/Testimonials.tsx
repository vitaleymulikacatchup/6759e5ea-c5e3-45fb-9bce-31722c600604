import React from 'react'
import { Star } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechCorp',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Designer',
      company: 'Innovate.ai',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      company: 'Designly',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Product Manager',
      company: 'StartupXYZ',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]

  return (
    <section className="bg-cream py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray">{testimonial.name}</h4>
                <p className="text-sm text-gray-text">{testimonial.role}</p>
                <p className="text-sm text-gray-text">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials