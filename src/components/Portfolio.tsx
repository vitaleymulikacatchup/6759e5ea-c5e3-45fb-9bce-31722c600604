import React from 'react'

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 2, image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 3, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 4, image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 5, image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 6, image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 7, image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 8, image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 9, image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 10, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 11, image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 12, image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 13, image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 14, image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
  ]

  return (
    <section className="bg-cream py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
              <img 
                src={item.image} 
                alt={`Portfolio item ${item.id}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio