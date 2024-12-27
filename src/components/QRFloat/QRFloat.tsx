import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import instagramIcon from '../../assets/instagram.svg';
import { QrCode } from 'lucide-react';
import wechatIcon from '../../assets/wechat.svg';
import instagramQR from '../../assets/instagram-qr.jpg';
import wechatQR from '../../assets/wechat-qr.jpg';
import { useQRFloat } from '../../context/QRFloatContext';

type QRType = 'wechat' | 'instagram';

interface QRCode {
  image: string;
  title: string;
  icon: JSX.Element;
}

const QRFloat = () => {
  const { t } = useTranslation();
  const { isOpen, openQRFloat, closeQRFloat } = useQRFloat();
  const [activeQR, setActiveQR] = useState<QRType>('wechat');

  const qrCodes: Record<QRType, QRCode> = {
    wechat: {
      image: wechatQR,
      title: t('qrFloat.wechat'),
      icon: <img src={wechatIcon} alt="WeChat" className="w-5 h-5" />
    },
    instagram: {
      image: instagramQR,
      title: t('qrFloat.instagram'),
      icon: <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={openQRFloat}
        className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <QrCode className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-xl w-72">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              {Object.entries(qrCodes).map(([key, { title, icon }]) => (
                <button
                  key={key}
                  onClick={() => setActiveQR(key as QRType)}
                  className={`p-2 rounded-md transition-colors ${
                    activeQR === key
                      ? 'bg-indigo-100 text-indigo-600'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                  title={title}
                >
                  {icon}
                </button>
              ))}
            </div>
            <button
              onClick={closeQRFloat}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div>
            <div className="text-center">
              <img
                src={qrCodes[activeQR].image}
                alt={`${qrCodes[activeQR].title} QR Code`}
                className="w-64 h-64 mx-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRFloat;
