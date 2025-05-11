import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import TabIcon from '../../assets/TabIcon.jpg';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f7eddd] shadow-sm">
      {/* 顶部：logo、标题、language switch */}
      <div className="flex items-center max-w-7xl mx-auto px-4 pt-6 pb-2 gap-6">
        {/* Logo */}
        <div className="flex items-center min-w-[48px]">
          <img src={TabIcon} alt="Logo" className="h-10 w-10 object-contain" />
        </div>
        {/* Title */}
        <h1 className="font-serif font-semibold text-xl sm:text-[2.5rem] tracking-tight text-[#23231f] select-none ml-2">
          {t('header.title')}
        </h1>
        {/* Language Switch */}
        <div className="flex items-center justify-end min-w-[48px] ml-auto">
          <button
            onClick={toggleLanguage}
            className="flex items-center text-[#23231f] hover:text-gray-600 transition-colors"
            aria-label="Switch Language"
          >
            <Globe className="w-6 h-6 mr-1" />
            <span className="text-base font-medium">{i18n.language === 'en' ? 'EN' : 'ZH'}</span>
          </button>
        </div>
      </div>
      {/* 菜单栏 */}
      <nav className="w-full border-t-[3px] border-[#23231f]">
        <ul
          className="flex justify-start gap-6 sm:gap-12 py-3 pl-2 sm:pl-[120px] max-w-7xl mx-auto overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        >
          <li
            className={`text-base sm:text-lg tracking-widest font-serif px-2 cursor-pointer transition-colors ${activeTab === 'home' ? 'font-bold underline text-[#23231f]' : 'text-[#23231f] hover:underline'}`}
            onClick={() => setActiveTab('home')}
          >
            {t('header.menu.home')}
          </li>
          <li
            className={`text-base sm:text-lg tracking-widest font-serif px-2 cursor-pointer transition-colors ${activeTab === 'workshop' ? 'font-bold underline text-[#23231f]' : 'text-[#23231f] hover:underline'}`}
            onClick={() => setActiveTab('workshop')}
          >
            {t('header.menu.workshops')}
          </li>
          <li
            className={`text-base sm:text-lg tracking-widest font-serif px-2 cursor-pointer transition-colors ${activeTab === 'products' ? 'font-bold underline text-[#23231f]' : 'text-[#23231f] hover:underline'}`}
            onClick={() => setActiveTab('products')}
          >
            {t('header.menu.products')}
          </li>
          {/* <li className="text-base sm:text-lg tracking-widest font-serif text-[#23231f] hover:underline cursor-pointer px-2">{t('header.menu.about')}</li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;