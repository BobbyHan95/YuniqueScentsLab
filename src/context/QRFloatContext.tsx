import { createContext, useContext, useState, ReactNode } from 'react';

interface QRFloatContextType {
  isOpen: boolean;
  openQRFloat: () => void;
  toggleQRFloat: () => void;
  closeQRFloat: () => void;
}

export const QRFloatContext = createContext<QRFloatContextType | undefined>(undefined);

export const QRFloatProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const openQRFloat = () => setIsOpen(true);
  const toggleQRFloat = () => setIsOpen(!isOpen);
  const closeQRFloat = () => setIsOpen(false);

  return (
    <QRFloatContext.Provider value={{ isOpen, openQRFloat, toggleQRFloat, closeQRFloat }}>
      {children}
    </QRFloatContext.Provider>
  );
};

export const useQRFloat = () => {
  const context = useContext(QRFloatContext);
  if (context === undefined) {
    throw new Error('useQRFloat must be used within a QRFloatProvider');
  }
  return context;
};
