import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import TabIcon from '../../assets/TabIcon.jpg';

const Header = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-secondary-light)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo area */}
          <div className="w-12 sm:w-20 flex items-center">
            <img src={TabIcon} alt="Logo" className="h-8 w-8 object-contain" />
          </div>
          
          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-bold whitespace-nowrap px-2 text-gray-900">
            Yunique Scents Lab
          </h1>
          
          {/* Language switch */}
          <div className="w-12 sm:w-20 flex justify-end">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-800 hover:text-gray-600 transition-colors"
            >
              <Globe className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">{i18n.language === 'en' ? 'EN' : 'ZH'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;