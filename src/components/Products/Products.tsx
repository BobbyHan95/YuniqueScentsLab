import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[120vh] bg-[#f7eddd] w-full">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* 左上大标题 */}
        <h1 className="flex items-center text-6xl md:text-7xl font-serif justify-center font-semibold text-[#23231f] mb-8">{t('products.title')}</h1>
        {/* 居中副标题 */}
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="font-bold tracking-wide text-lg md:text-xl text-[#23231f] mb-2 uppercase">
              {t('products.subtitle1')}
            </div>
            <div className="font-bold tracking-wide text-lg md:text-xl text-[#23231f] uppercase">
              {t('products.subtitle2')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
