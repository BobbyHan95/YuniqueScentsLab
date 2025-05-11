import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Workshop from './components/Workshop';
import Products from './components/Products';
import QRFloat from './components/QRFloat';
import { QRFloatProvider } from './context/QRFloatContext';
import './i18n/config';

function renderContent(tab: string) {
  switch (tab) {
    case 'home':
      return <Home />;
    case 'workshop':
      return <Workshop />;
    case 'products':
      return <Products />;
    default:
      return <Home />;
  }
}

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <QRFloatProvider>
      <div className="min-h-screen flex flex-col">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderContent(activeTab)}
          </div>
        </main>

        <Footer />
        <QRFloat />
      </div>
    </QRFloatProvider>
  );
}

export default App;