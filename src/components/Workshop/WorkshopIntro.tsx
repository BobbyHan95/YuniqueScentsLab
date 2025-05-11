import { useTranslation } from 'react-i18next';
import introWorkshop from '../../assets/home_image1.png';

const WorkshopIntro = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
      {/* Left side - Image */}
      <div className="md:w-1/2">
        <div className="relative">
          <div className="absolute -inset-2 bg-[var(--color-secondary-dark)] rounded-lg transform rotate-2"></div>
          <img
            src={introWorkshop}
            alt="Perfume Workshop"
            className="relative rounded-lg shadow-lg w-full h-[400px] md:h-[450px] object-cover"
          />
        </div>
      </div>
      
      {/* Right side - Text content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">{t('workshop.title')}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('workshop.description')}
        </p>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">{t('workshop.whatYouLearn')}</h3>
          <ul className="space-y-3">
            {[1, 2, 3, 4].map((num) => (
              <li key={num} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-secondary-dark)] text-gray-700 text-sm mr-3 mt-0.5">
                  {num}
                </span>
                <span className="text-gray-600">{t(`workshop.learningPoints.${num}`)}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 italic bg-[var(--color-secondary-light)] p-4 rounded-lg">
          {t('workshop.notice')}
        </p>
      </div>
    </div>
  );
};

export default WorkshopIntro;
