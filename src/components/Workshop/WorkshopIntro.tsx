import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
const WorkshopIntro = () => {
  const { t } = useTranslation();

  // 滚动到对应的工作坊区域
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="bg-[#f7eddd] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Workshop Title */}
        <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#23231f] mb-12 text-center">WorkShop</h1>
        
        <div className="flex flex-col items-center max-w-7xl mx-auto">
          {/* Text and Buttons */}
          <div className="w-full space-y-6 text-center">
            <div className="space-y-4"> 
              <h2 className="text-xl md:text-2xl font-medium text-[#23231f]">
                {t('workshop.intro.title', 'Discover the Art of Scent & Creation')}
              </h2>
              <p className="text-lg text-[#23231f]">
                {t('workshop.intro.subtitle', `Hands-on workshops to craft your unique perfumes, car diffusers, and sand art candles

Relax, craft, and take home your personalized fragrance creations.`)}
              </p>
            </div>
            
            <div className="space-y-4 pt-4 max-w-xl justify-self-center">
              {/* Workshop Buttons */}
              <button 
                className="w-full border-2 border-[#23231f] py-3 px-4 text-center text-[#23231f] hover:bg-[#23231f] hover:text-white transition-colors font-medium"
                onClick={() => scrollToSection('workshop-perfume')}
              >
                {t('workshop.types.perfume', 'DIY Perfume Workshop')}
              </button>
              
              <button 
                className="w-full border-2 border-[#23231f] py-3 px-4 text-center text-[#23231f] hover:bg-[#23231f] hover:text-white transition-colors font-medium"
                onClick={() => scrollToSection('workshop-car-diffuser')}
              >
                {t('workshop.types.diffuser', 'Car Diffuser Workshop')}
              </button>
              
              <button 
                className="w-full border-2 border-[#23231f] py-3 px-4 text-center text-[#23231f] hover:bg-[#23231f] hover:text-white transition-colors font-medium"
                onClick={() => scrollToSection('workshop-candle')}
              >
                {t('workshop.types.candle', 'Sand Art Candle Workshop')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopIntro;
