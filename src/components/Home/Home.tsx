import img1 from '../../assets/home_image1.png';
import img2 from '../../assets/home_image2.jpg';
import img3 from '../../assets/home_image3.jpg';
import WorkshopIntro from '../Workshop/WorkshopIntro';
import ImageCarousel from '../common/ImageCarousel';
import { useTranslation } from 'react-i18next';

const images = [img1, img2, img3];

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
    <section className="w-full flex flex-col md:flex-row items-stretch justify-between max-w-7xl mx-auto px-4 py-12 md:py-24 gap-8">
      {/* 左侧大标题 */}
      <div className="flex-1 flex items-center md:items-start justify-center md:justify-start">
        <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#23231f] break-words whitespace-pre-line">
          {t('home.heroTitle1')}<br />
          {t('home.heroTitle2')}<br />
          {t('home.heroTitle3')}<br />
          {t('home.heroTitle4')}
        </h1>
      </div>
      {/* 右侧图片轮播 */}
      <div className="flex-1 flex items-center justify-center">
        <ImageCarousel images={images} />
      </div>
      
    </section>
    <WorkshopIntro />
    </>
  );
};

export default Home;
