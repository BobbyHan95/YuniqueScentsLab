import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--color-secondary-light)] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:space-x-8">
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>437-599-6297</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              <span>yuniquecandle0218@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Suite 204, 277 Lakeshore Rd E, Oakville, L6J 6J3</span>
            </div>
          </div>
          
          <div className="text-gray-600 text-xs mt-4 sm:mt-0">
            {t('footer.copyright')} {new Date().getFullYear()} Yunique Scents Lab. 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;