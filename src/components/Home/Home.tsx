import img1 from '../../assets/home_page_img_1.jpg';
import img2 from '../../assets/home_page_img_2.jpg';
import img3 from '../../assets/home_page_img_3.jpg';
import img4 from '../../assets/home_page_img_4.jpg';
import img5 from '../../assets/home_page_img_5.jpg';
import img6 from '../../assets/home_page_img_2_1.jpg';
import ImageCarousel from '../common/ImageCarousel';
import { useTranslation } from 'react-i18next';

const images = [img1, img2, img3, img4, img5];

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
    <section className="w-full flex flex-col md:flex-row items-stretch justify-between max-w-7xl mx-auto px-4 py-12 md:py-24 gap-8">
      {/* 左侧大标题 */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-800 leading-tight text-center">
          {t('home.heroTitle1') + ' '}
          <span className="hidden md:inline"><br /></span>
          {t('home.heroTitle2') + ' '}
          <br />
          {t('home.heroTitle3') + ' '}
          <span className="hidden md:inline"><br /></span>
          {t('home.heroTitle4')}
        </h1>
      </div>
      {/* 右侧图片轮播 */}
      <div className="flex-1 flex items-center justify-center">
        <ImageCarousel images={images} />
      </div>      
    </section>
    <div className="flex flex-col-reverse md:flex-row gap-12 items-center mb-24 max-w-7xl container mx-auto px-4 py-12">
      {/* Left side - Image */}
      <div className="md:w-1/2">
        <div className="relative">
          <div className="absolute -inset-2 bg-[var(--color-secondary-dark)] rounded-lg transform rotate-2"></div>
          <img
            src={img6}
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
    </>
  );
};

export default Home;
