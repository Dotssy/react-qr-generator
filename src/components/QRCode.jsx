import { useEffect } from 'react';
import Loader from './Loader';
import { useQRGeneratorContext } from '../context/QRGeneratorContext';

const QRCode = () => {
  const { qrData, isLoading } = useQRGeneratorContext();

  //Handling equal resizing of qr window on smaller resolutions
  useEffect(() => {
    const rect = document.getElementById('qr-rect');

    rect.style.height = rect.clientWidth + 4 + 'px';

    const resizeQrRectHeight = () => {
      rect.style.height = rect.clientWidth + 4 + 'px';
    };

    window.addEventListener('resize', resizeQrRectHeight);
    return () => window.removeEventListener('resize', resizeQrRectHeight);
  }, []);

  return (
    <div className="flex w-full p-6 justify-center items-center border-solid border-[1px] border-gray-700 relative">
      <div className="absolute top-[-15px] bg-[#2e2d2d] text-center w-32">
        <h5 className="text-gray-400 text-lg uppercase tracking-wider">
          QR Code
        </h5>
      </div>
      <div
        id="qr-rect"
        className="flex items-center justify-center w-[284px] border-dotted border-2 border-sky-400"
      >
        {isLoading ? (
          <Loader />
        ) : (
          qrData && <img src={qrData} alt="QR Code" title="QR Code" />
        )}
      </div>
    </div>
  );
};

export default QRCode;
