import { useTranslation } from 'react-i18next';
import workshopReserveNow from '../../assets/workshop_Reserve_now.png';
import workshopSendAsGift from '../../assets/workshop_Send_as_gift.jpg';
import { useQRFloat } from '../../context/QRFloatContext';

const WorkshopBooking = () => {
  const { t } = useTranslation();
  const { openQRFloat } = useQRFloat();

  return (
    <div className="flex flex-col md:flex-row gap-8 items-stretch">
      {/* Book for Yourself */}
      <div className="md:w-1/2 group">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
          <div className="relative">
            <img
              src={workshopReserveNow}
              alt="Book for Yourself"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('workshop.booking.selfBooking.title')}</h3>
            <div className="space-y-4">
              {['duration', 'bottleSize', 'price'].map((item) => (
                <div key={item} className="flex items-center text-gray-600 border-b border-gray-100 pb-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mr-3"></span>
                  <span> {t(`workshop.booking.selfBooking.${item}`)} </span>
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
              src={workshopSendAsGift}
              alt="Send as a Gift"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('workshop.booking.giftBooking.title')}</h3>
            <p className="text-lg text-gray-600">
              <button 
                onClick={openQRFloat}
                className="text-indigo-600 hover:text-indigo-800 underline font-medium"
              >
                {t('workshop.booking.giftBooking.description')}{' '}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopBooking;
