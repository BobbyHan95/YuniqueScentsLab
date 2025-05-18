import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Workshop from './components/Workshop';
import Products from './components/Products';
import QRFloat from './components/QRFloat';
import { QRFloatProvider } from './context/QRFloatContext';
import './i18n/config';
import { useRef, useEffect, useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const homeRef = useRef<HTMLDivElement>(null);
  const workshopRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // 滚动到指定section
  const scrollToSection = (section: string) => {
    let ref: React.RefObject<HTMLDivElement> | null = null;
    if (section === 'home') ref = homeRef;
    else if (section === 'workshop') ref = workshopRef;
    else if (section === 'products') ref = productsRef;
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 监听滚动，动态高亮tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const workshopTop = workshopRef.current?.offsetTop || 0;
      const productsTop = productsRef.current?.offsetTop || 0;
      const offset = 100; // header高度buffer
      if (scrollY >= productsTop - offset) setActiveTab('products');
      else if (scrollY >= workshopTop - offset) setActiveTab('workshop');
      else setActiveTab('home');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <QRFloatProvider>
      <div className="min-h-screen flex flex-col">
        <Header activeTab={activeTab} setActiveTab={scrollToSection} />
        <main className="flex-grow">
          <div ref={homeRef} id="home" className="scroll-mt-24">
            <Home />
          </div>
          <div ref={workshopRef} id="workshop" className="scroll-mt-24">
            <Workshop />
          </div>
          <div ref={productsRef} id="products" className="scroll-mt-24">
            <Products />
          </div>
        </main>
        <Footer />
        <QRFloat />
      </div>
    </QRFloatProvider>
  );
}

export default App;