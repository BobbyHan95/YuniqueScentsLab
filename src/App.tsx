import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Workshop from './components/Workshop';
import Products from './components/Products';
import QRFloat from './components/QRFloat';
import { QRFloatProvider } from './context/QRFloatContext';
import './i18n/config';

function App() {
  const [activeTab, setActiveTab] = useState('workshop');

  return (
    <QRFloatProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex justify-center space-x-12">
              <button
                onClick={() => setActiveTab('workshop')}
                className={`${
                  activeTab === 'workshop'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-6 border-b-2 font-medium text-lg`}
              >
                Workshop
              </button>
              <button
                onClick={() => setActiveTab('product')}
                className={`${
                  activeTab === 'product'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-6 border-b-2 font-medium text-lg`}
              >
                Products
              </button>
            </nav>
          </div>
        </div>

        <main className="flex-grow bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'workshop' ? <Workshop /> : <Products />}
          </div>
        </main>

        <Footer />
        <QRFloat />
      </div>
    </QRFloatProvider>
  );
}

export default App;