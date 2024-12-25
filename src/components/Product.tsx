import React from 'react';

const products = [
  {
    id: 1,
    name: 'Midnight Rose',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=400',
    description: 'A mysterious blend of Bulgarian rose and dark vanilla'
  },
  {
    id: 2,
    name: 'Ocean Breeze',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=400',
    description: 'Fresh marine notes with a hint of citrus'
  },
  {
    id: 3,
    name: 'Forest Whisper',
    price: '$94.99',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400',
    description: 'Woody aromatics with pine and cedar notes'
  }
];

const Product = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">{product.price}</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
