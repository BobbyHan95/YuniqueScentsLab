import React from 'react';
import { useTranslation } from 'react-i18next';
import introWorkshop from '../assets/intro_workshop.png';

const Workshop = () => {
  const { t } = useTranslation();

  // Placeholder image URLs
  const selfBookingImg = "https://placehold.co/600x400/f8fafc/64748b?text=Book+Workshop";
  const giftBookingImg = "https://placehold.co/600x400/f8fafc/64748b?text=Gift+Workshop";

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
        {/* Left side - Image */}
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-2 bg-[#EFDEB0]/70 rounded-lg transform rotate-2"></div>
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
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#EFDEB0]/50 text-gray-700 text-sm mr-3 mt-0.5">
                    {num}
                  </span>
                  <span className="text-gray-600">{t(`workshop.learningPoints.${num}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-600 italic bg-[#EFDEB0]/50 p-4 rounded-lg">
            {t('workshop.notice')}
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Book for Yourself */}
        <div className="md:w-1/2 group">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
            <div className="relative">
              <img
                src={selfBookingImg}
                alt="Book for Yourself"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('workshop.booking.selfBooking.title')}</h3>
              <div className="space-y-4">
                {['duration', 'price', 'bottleSize'].map((item) => (
                  <div key={item} className="flex items-center text-gray-600 border-b border-gray-100 pb-3">
                    <span className="w-2 h-2 rounded-full bg-[#EFDEB0] mr-3"></span>
                    <span>{t(`workshop.booking.selfBooking.${item}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Send as a Gift */}
        <div className="md:w-1/2 group">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
            <div className="relative">
              <img
                src={giftBookingImg}
                alt="Send as a Gift"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('workshop.booking.giftBooking.title')}</h3>
              <p className="text-lg text-gray-600">{t('workshop.booking.giftBooking.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
