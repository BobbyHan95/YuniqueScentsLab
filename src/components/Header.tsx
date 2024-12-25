import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="bg-[#EFDEB0]/50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Empty div for flex spacing - reduced width on mobile */}
          <div className="w-12 sm:w-20" />
          
          {/* Centered title with more space */}
          <h1 className="text-xl sm:text-2xl font-bold whitespace-nowrap px-2">Yunique Scents Lab</h1>
          
          {/* Language switch */}
          <div className="w-12 sm:w-20 flex justify-end">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-800 hover:text-gray-600"
            >
              <Globe className="w-5 h-5 mr-1" />
              {i18n.language === 'en' ? 'EN' : 'ZH'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;