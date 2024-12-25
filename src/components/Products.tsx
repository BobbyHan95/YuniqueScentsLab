import React from 'react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-32 max-w-6xl">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800 bg-[#EFDEB0]/30 px-8 py-4 rounded-lg">
          {t('products.comingSoon')}
        </h2>
      </div>
    </div>
  );
};

export default Products;
