import { createContext, useContext } from 'react';

// Context
export const QRGeneratorContext = createContext();

export const useQRGeneratorContext = () => {
  const context = useContext(QRGeneratorContext);

  if (context === undefined) {
    throw new Error(
      'useQRGenetatorContext must be used within an QRGeneratorProvider'
    );
  }

  return context;
};
